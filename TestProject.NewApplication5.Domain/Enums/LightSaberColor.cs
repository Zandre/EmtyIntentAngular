using System.ComponentModel;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Inoxico.Module.NTiered.Application.CSharpEnumTemplate", Version = "1.0")]

namespace AngularFrontEnd.Enums
{
    public enum LightSaberColor
    {
        [Description("Green")]
        Green = 1,

        [Description("Blue")]
        Blue = 2,

        [Description("Red")]
        Red = 2,

        [Description("Purple")]
        Purple = 4,

    }
}