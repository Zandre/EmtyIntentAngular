using System.Security.Claims;
using System.Threading.Tasks;

namespace AngularFrontEnd.Auth
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity);
    }
}
