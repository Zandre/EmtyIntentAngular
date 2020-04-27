


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
    public class ForceUsers_TestServiceController : Controller
    {
        private readonly IForceUsers_TestService _appService;
        private readonly NewApplication5DbContext _dbContext;

        public ForceUsers_TestServiceController(IForceUsers_TestService appService
            , NewApplication5DbContext dbContext
            )
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext;
        }

        [HttpPost("createforceuser")]
        [Authorize]
        [ProducesResponseType(typeof(Guid), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> CreateForceUser([FromBody]TestProject.NewApplication5.Application.DTOs.ForceUsers_TestService.CreateForceUser createForceUserDto)
        {
            Guid result = default(Guid);
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    var appServiceResult = await _appService.CreateForceUser(createForceUserDto);
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

        [HttpPost("updateforceuser")]
        [Authorize]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> UpdateForceUser([FromBody]TestProject.NewApplication5.Application.DTOs.ForceUsers_TestService.UpdateForceUser updateForceUserDto)
        {
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    await _appService.UpdateForceUser(updateForceUserDto);

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

        [HttpDelete("deleteforceuser")]
        [Authorize]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> DeleteForceUser(Guid id)
        {
            var tso = new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted };

            try
            {
                using (TransactionScope ts = new TransactionScope(TransactionScopeOption.Required, tso, TransactionScopeAsyncFlowOption.Enabled))
                {
                    await _appService.DeleteForceUser(id);

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

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);

            //dispose all resources
            _appService.Dispose();
            _dbContext.Dispose();
        }

    }
}