



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
        public async Task<TestDTO> GetTestData()
        {
            var sithLord = await _sithLordRepository.FindByIdAsync(new Guid("15E3EF57-6C6E-478E-908A-D7EEB1851D9D"));

            //_sithLordRepository.Add(SithLords.Create(apprentice: "Snoke", master: "Darth Sidious"));

            return TestDTO.Create(apprentice: sithLord.Apprentice,
                master: sithLord.Master);
        }

        public void Dispose()
        {
        }
    }
}