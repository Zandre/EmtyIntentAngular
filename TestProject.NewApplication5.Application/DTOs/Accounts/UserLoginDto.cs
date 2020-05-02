
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.DTO", Version = "1.0")]

namespace TestProject.NewApplication5.Application.DTOs.Accounts
{
    [DataContract]
    public class UserLoginDto
    {
        public UserLoginDto()
        {
        }

        public static UserLoginDto Create(
            string email,
            string name,
            string jwt)
        {
            return new UserLoginDto
            {
                Email = email,
                Name = name,
                Jwt = jwt,
            };
        }

        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Jwt { get; set; }
    }
}