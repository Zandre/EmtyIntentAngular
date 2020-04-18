using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using static TestProject.NewApplication5.Domain.Enums;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityInterface", Version = "1.0")]

namespace TestProject.NewApplication5.Domain
{

    public partial interface IForceUsers
    {

        /// <summary>
        /// Get the persistent object's identifier
        /// </summary>
        Guid Id { get; }

        string Name { get; set; }

        Side Side { get; set; }

        Speciality Speciality { get; set; }

        LightSaberColor LightSaberColor { get; set; }

    }
}
