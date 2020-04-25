using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace TestProject.NewApplication5.Application
{

    public interface IForceUsersQueryService_TestService : IDisposable
    {

        Task<List<DTOs.ForceUserQueryService_TestService.ForceUser>> GetForceUsers();

        void CauseCSharpError();
    }
}