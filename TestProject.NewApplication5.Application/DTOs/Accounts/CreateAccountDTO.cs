
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.DTO", Version = "1.0")]

namespace TestProject.NewApplication5.Application.DTOs.Accounts
{
    [DataContract]
    public class CreateAccountDTO
    {
        public CreateAccountDTO()
        {
        }

        public static CreateAccountDTO Create(
            string firstName,
            string lastName,
            string password,
            string email)
        {
            return new CreateAccountDTO
            {
                FirstName = firstName,
                LastName = lastName,
                Password = password,
                Email = email,
            };
        }

        [DataMember]
        public string FirstName { get; set; }

        [DataMember]
        public string LastName { get; set; }

        [DataMember]
        public string Password { get; set; }

        [DataMember]
        public string Email { get; set; }
    }
}