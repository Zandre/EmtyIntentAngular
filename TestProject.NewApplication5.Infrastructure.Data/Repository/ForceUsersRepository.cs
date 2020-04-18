using System;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using TestProject.NewApplication5.Domain;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.Repositories.Implementation", Version = "1.0")]

namespace TestProject.NewApplication5.Infrastructure.Data
{
    [IntentManaged(Mode.Merge)]
    public class ForceUsersRepository : RepositoryBase<IForceUsers, ForceUsers, NewApplication5DbContext>, IForceUsersRepository
    {
        public ForceUsersRepository(NewApplication5DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IForceUsers> FindByIdAsync(Guid id)
        {
            return await FindAsync(x => x.Id == id);
        }
    }
}