



using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Application.Auth;
using TestProject.NewApplication5.Application.Helpers;
using TestProject.NewApplication5.Infrastructure.Data.DbContext;

[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations", Version = "1.0")]

namespace TestProject.NewApplication5.Application.ServiceImplementation
{
    public class Accounts : IAccounts
    {

        private readonly UserManager<AppUser> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;

        public Accounts(UserManager<AppUser> userManager,
            IJwtFactory jwtFactory,
            IOptions<JwtIssuerOptions> jwtOptions)
        {
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task CreateAccount(string firstName, string lastName, string email, string password)
        {
            var result = await _userManager.CreateAsync(
                new AppUser(firstName: firstName,
                    lastName: lastName,
                    email: email),
                password: password);

            if (!result.Succeeded)
            {
                throw new Exception("something went wrong");
            }
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<string> Login(string userName, string password)
        {
            var claimsIdentity = await GetClaimsIdentity(userName, password);
            if (claimsIdentity == null)
            {
                throw new Exception("Login failed, invalid username or password");
            }
            var jwt = await Tokens.GenerateJwt(identity: claimsIdentity,
                jwtFactory: _jwtFactory,
                userName: userName,
                jwtOptions: _jwtOptions,
                serializerSettings: new JsonSerializerSettings { Formatting = Formatting.Indented });

            return jwt;
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
            {
                return await Task.FromResult<ClaimsIdentity>(null);
            }

            // get the user to verifty
            var userToVerify = await _userManager.FindByNameAsync(userName);

            if (userToVerify == null)
            {
                return await Task.FromResult<ClaimsIdentity>(null);
            }

            // check the credentials
            if (await _userManager.CheckPasswordAsync(userToVerify, password))
            {
                return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
            }

            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }

        public void Dispose()
        {
        }
    }
}