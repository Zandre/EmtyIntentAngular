


using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Transactions;
using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Infrastructure.Data;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.WebApi.Controller", Version = "1.0")]

namespace AngularFrontEnd.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly IAccounts _appService;
        private readonly NewApplication5DbContext _dbContext;

        public AccountsController(IAccounts appService
            , NewApplication5DbContext dbContext
            )
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext;
        }

        [HttpGet("createaccount")]
        [AllowAnonymous]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> CreateAccount(string firstName, string lastName, string email, string password)
        {
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    await _appService.CreateAccount(firstName, lastName, email, password);

                    await _dbContext.SaveChangesAsync();
                    ts.Complete();
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }

            return Ok();

        }

        [HttpGet("login")]
        [AllowAnonymous]
        [ProducesResponseType(typeof(TestProject.NewApplication5.Application.DTOs.Accounts.UserLoginDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Login(string userName, string password)
        {
            TestProject.NewApplication5.Application.DTOs.Accounts.UserLoginDto result = default(TestProject.NewApplication5.Application.DTOs.Accounts.UserLoginDto);
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    var appServiceResult = await _appService.Login(userName, password);
                    result = appServiceResult;

                    await _dbContext.SaveChangesAsync();
                    ts.Complete();
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }

            return Ok(result);

        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);

            //dispose all resources
            _appService.Dispose();
            _dbContext.Dispose();
        }

    }
}