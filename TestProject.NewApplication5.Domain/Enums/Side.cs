using System.ComponentModel;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Inoxico.Module.NTiered.Application.CSharpEnumTemplate", Version = "1.0")]

namespace AngularFrontEnd.Enums
{
    public enum Side
    {
        [Description("Light")]
        Light = 1,

        [Description("Dark")]
        Dark = 2,

    }
}