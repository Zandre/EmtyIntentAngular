



using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Domain;


[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations", Version = "1.0")]

namespace TestProject.NewApplication5.Application.ServiceImplementation
{
    public class ForceUsers_TestService : IForceUsers_TestService
    {
        private readonly IForceUsersRepository _forceUsersRepository;

        public ForceUsers_TestService(IForceUsersRepository forceUsersRepository)
        {
            _forceUsersRepository = forceUsersRepository;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task CreateForceUser(DTOs.ForceUsers_TestService.CreateForceUser createForceUserDto)
        {
            var forceUser = ForceUsers.Create(name: createForceUserDto.Name,
                side: createForceUserDto.Side,
                speciality: createForceUserDto.Speciality,
                lightSaberColor: createForceUserDto.LightSaberColor);

            _forceUsersRepository.Add(forceUser);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task UpdateForceUser(DTOs.ForceUsers_TestService.UpdateForceUser updateForceUserDto)
        {
            var forceUser = await _forceUsersRepository.FindByIdAsync(updateForceUserDto.Id);
            forceUser.UpdateDetails(name: updateForceUserDto.Name,
                side: updateForceUserDto.Side,
                speciality: updateForceUserDto.Speciality,
                lightSaberColor: updateForceUserDto.LightSaberColor);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task DeleteForceUser(Guid id)
        {
            var forceUser = await _forceUsersRepository.FindByIdAsync(id);
            _forceUsersRepository.Remove(forceUser);
        }

        public void Dispose()
        {
        }
    }
}