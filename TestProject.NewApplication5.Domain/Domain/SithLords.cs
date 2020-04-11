using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Ignore)]
[assembly: IntentTemplate("Intent.Entities.DomainEntity", Version = "1.0")]

namespace TestProject.NewApplication5.Domain
{
    [IntentManaged(Mode.Merge)]
    [DefaultIntentManaged(Mode.Merge, Signature = Mode.Merge, Body = Mode.Merge, Targets = Targets.Methods, AccessModifiers = AccessModifiers.Public)]
    public partial class SithLords
    {
        public static SithLords Create(string apprentice, string master)
        {
            return new SithLords
            {
                Apprentice = apprentice,
                Master = master
            };
        }
    }
}