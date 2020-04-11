using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using TestProject.NewApplication5.Domain.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace TestProject.NewApplication5.Domain
{

    public partial class SithLords : Object, ISithLords
    {
        public SithLords()
        {
        }

        private Guid? _id = null;

        /// <summary>
        /// Get the persistent object's identifier
        /// </summary>
        public virtual Guid Id
        {
            get { return _id ?? (_id = IdentityGenerator.NewSequentialId()).Value; }
            set { _id = value; }
        }

        private string _master;

        public string Master
        {
            get { return _master; }
            set
            {
                _master = value;
            }
        }

        private string _apprentice;

        public string Apprentice
        {
            get { return _apprentice; }
            set
            {
                _apprentice = value;
            }
        }
    }
}
