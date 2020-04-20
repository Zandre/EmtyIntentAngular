using System;
using System.Collections.Generic;
using AngularFrontEnd.Enums;
using Intent.RoslynWeaver.Attributes;
using TestProject.NewApplication5.Domain.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace TestProject.NewApplication5.Domain
{

    public partial class ForceUsers : Object, IForceUsers
    {
        public ForceUsers()
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

        private string _name;

        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
            }
        }

        private Side _side;

        public Side Side
        {
            get { return _side; }
            set
            {
                _side = value;
            }
        }

        private Speciality _speciality;

        public Speciality Speciality
        {
            get { return _speciality; }
            set
            {
                _speciality = value;
            }
        }

        private LightSaberColor _lightSaberColor;

        public LightSaberColor LightSaberColor
        {
            get { return _lightSaberColor; }
            set
            {
                _lightSaberColor = value;
            }
        }
    }
}
