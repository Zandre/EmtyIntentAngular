
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.DTO", Version = "1.0")]

namespace TestProject.NewApplication5.Application.DTOs.TestService
{
    [DataContract]
    public class TestDTO
    {
        public TestDTO()
        {
        }

        public static TestDTO Create(
            string apprentice,
            string master)
        {
            return new TestDTO
            {
                Apprentice = apprentice,
                Master = master,
            };
        }

        [DataMember]
        public string Apprentice { get; set; }

        [DataMember]
        public string Master { get; set; }
    }
}