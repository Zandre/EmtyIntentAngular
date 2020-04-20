using System;
using System.Collections.Generic;
using AngularFrontEnd.Enums;
using Intent.RoslynWeaver.Attributes;


[assembly: DefaultIntentManaged(Mode.Ignore)]
[assembly: IntentTemplate("Intent.Entities.DomainEntity", Version = "1.0")]

namespace TestProject.NewApplication5.Domain
{
    [IntentManaged(Mode.Merge)]
    [DefaultIntentManaged(Mode.Merge, Signature = Mode.Merge, Body = Mode.Merge, Targets = Targets.Methods, AccessModifiers = AccessModifiers.Public)]
    public partial class ForceUsers
    {
        public static ForceUsers Create(string name, Side side, Speciality speciality, LightSaberColor lightSaberColor)
        {
            return new ForceUsers
            {
                Name = name,
                Side = side,
                Speciality = speciality,
                LightSaberColor = lightSaberColor
            };
        }

        public void UpdateDetails(string name, Side side, Speciality speciality, LightSaberColor lightSaberColor)
        {
            Name = name;
            Side = side;
            Speciality = speciality;
            LightSaberColor = lightSaberColor;
        }

    }
}