



using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Application.DTOs.ForceUserQueryService_TestService;
using TestProject.NewApplication5.Domain;


[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations", Version = "1.0")]

namespace TestProject.NewApplication5.Application.ServiceImplementation
{
    public class ForceUsersQueryService_TestService : IForceUsersQueryService_TestService
    {

        private readonly IForceUsersRepository _forceUsersRepository;

        public ForceUsersQueryService_TestService(IForceUsersRepository forceUsersRepository)
        {
            _forceUsersRepository = forceUsersRepository;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<List<DTOs.ForceUserQueryService_TestService.ForceUser>> GetForceUsers()
        {
            var forceUsers = await _forceUsersRepository.FindAllAsync();
            return forceUsers.Select(forceUser => ForceUser.Create(
                id: forceUser.Id, 
                side: forceUser.Side, 
                speciality: forceUser.Speciality,
                lightSaberColor: forceUser.LightSaberColor, 
                name: forceUser.Name))
                .ToList();
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public void CauseCSharpError()
        {
            throw new Exception("C# error message");
        }

        public void Dispose()
        {
        }
    }
}