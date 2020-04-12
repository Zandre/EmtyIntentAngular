using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace TestProject.NewApplication5.Application
{

    public interface IAuthorization : IDisposable
    {

        Task Login(string userName, string password);
    }
}