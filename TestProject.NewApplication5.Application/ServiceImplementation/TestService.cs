



using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Application.DTOs.TestService;
using TestProject.NewApplication5.Domain;

[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations", Version = "1.0")]

namespace TestProject.NewApplication5.Application.ServiceImplementation
{
    public class TestService : ITestService
    {

        private readonly ISithLordsRepository _sithLordRepository;

        public TestService(ISithLordsRepository sithLordRepository)
        {
            _sithLordRepository = sithLordRepository;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<List<TestDTO>> GetTestData()
        {
            var sithLords = await _sithLordRepository.FindAllAsync();

            return sithLords.Select(sith => TestDTO.Create(apprentice: sith.Apprentice, master: sith.Master)).ToList();
        }

        public void Dispose()
        {
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<List<TestDTO>> GetTestDataUnauthorized()
        {
            var sithLords = await _sithLordRepository.FindAllAsync();

            return sithLords.Select(sith => TestDTO.Create(apprentice: sith.Apprentice, master: sith.Master)).ToList();
        }
    }
}