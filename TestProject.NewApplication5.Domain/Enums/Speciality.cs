using System.ComponentModel;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Inoxico.Module.NTiered.Application.CSharpEnumTemplate", Version = "1.0")]

namespace AngularFrontEnd.Enums
{
    public enum Speciality
    {
        [Description("LightSaber")]
        LightSaber = 1,

        [Description("ForceLightning")]
        ForceLightning = 2,

        [Description("Prophesy")]
        Prophesy = 3,

    }
}