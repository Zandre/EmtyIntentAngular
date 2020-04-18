
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Intent.RoslynWeaver.Attributes;
using static TestProject.NewApplication5.Domain.Enums;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.DTO", Version = "1.0")]

namespace TestProject.NewApplication5.Application.DTOs.ForceUsers_TestService
{
    [DataContract]
    public class UpdateForceUser
    {
        public UpdateForceUser()
        {
        }

        public static UpdateForceUser Create(
            Guid id,
            Side side,
            Speciality speciality,
            LightSaberColor lightSaberColor,
            string name)
        {
            return new UpdateForceUser
            {
                Id = id,
                Side = side,
                Speciality = speciality,
                LightSaberColor = lightSaberColor,
                Name = name,
            };
        }

        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        public Side Side { get; set; }

        [DataMember]
        public Speciality Speciality { get; set; }

        [DataMember]
        public LightSaberColor LightSaberColor { get; set; }

        [DataMember]
        public string Name { get; set; }
    }
}