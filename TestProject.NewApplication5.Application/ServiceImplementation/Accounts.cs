



using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Identity;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Infrastructure.Data.DbContext;

[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations", Version = "1.0")]

namespace TestProject.NewApplication5.Application.ServiceImplementation
{
    public class Accounts : IAccounts
    {
        private readonly UserManager<AppUser> _userManager;

        public Accounts(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task CreateAccount(string firstName)
        {

            int x = 3;
            //var result = await _userManager.CreateAsync(new AppUser(createAccountDto.FirstName,
            //    createAccountDto.LastName,
            //    createAccountDto.Email),
            //    createAccountDto.Password);

            //if (!result.Succeeded)
            //{
            //    throw new Exception("something went wrong");
            //}
        }

        public void Dispose()
        {
        }
    }
}