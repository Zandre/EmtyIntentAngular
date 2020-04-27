using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace TestProject.NewApplication5.Application
{

    public interface IForceUsers_TestService : IDisposable
    {

        Guid CreateForceUser(DTOs.ForceUsers_TestService.CreateForceUser createForceUserDto);

        Task UpdateForceUser(DTOs.ForceUsers_TestService.UpdateForceUser updateForceUserDto);

        Task DeleteForceUser(Guid id);
    }
}