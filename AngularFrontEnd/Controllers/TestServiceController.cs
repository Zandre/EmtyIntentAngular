


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
    public class TestServiceController : Controller
    {
        private readonly ITestService _appService;
        private readonly NewApplication5DbContext _dbContext;

        public TestServiceController(ITestService appService
            , NewApplication5DbContext dbContext
            )
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext;
        }

        [HttpGet("gettestdata")]
        [Authorize(Policy = "ApiUser")]
        [ProducesResponseType(typeof(List<TestProject.NewApplication5.Application.DTOs.TestService.TestDTO>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetTestData()
        {
            List<TestProject.NewApplication5.Application.DTOs.TestService.TestDTO> result = default(List<TestProject.NewApplication5.Application.DTOs.TestService.TestDTO>);
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    var appServiceResult = await _appService.GetTestData();
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

        [HttpGet("gettestdataunauthorized")]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<TestProject.NewApplication5.Application.DTOs.TestService.TestDTO>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetTestDataUnauthorized()
        {
            List<TestProject.NewApplication5.Application.DTOs.TestService.TestDTO> result = default(List<TestProject.NewApplication5.Application.DTOs.TestService.TestDTO>);
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    var appServiceResult = await _appService.GetTestDataUnauthorized();
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