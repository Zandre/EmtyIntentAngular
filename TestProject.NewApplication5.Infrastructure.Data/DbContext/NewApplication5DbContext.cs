using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TestProject.NewApplication5.Domain;
using TestProject.NewApplication5.Infrastructure.Data.DbContext;


[assembly: DefaultIntentManaged(Mode.Ignore)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.DbContext", Version = "1.0")]

// ZB - set to Intent 'Ignore' to implement Identity changes

namespace TestProject.NewApplication5.Infrastructure.Data
{
    public class NewApplication5DbContext : IdentityDbContext<AppUser>
    {
        public NewApplication5DbContext(DbContextOptions options) : base(options)
        {

        }

        //public DbSet<SithLords> SithLordses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            ConfigureModel(modelBuilder);

            //modelBuilder.ApplyConfiguration(new SithLordsMapping());
        }

        [IntentManaged(Mode.Ignore)]
        private void ConfigureModel(ModelBuilder modelBuilder)
        {
            // Customize Default Schema
            // modelBuilder.HasDefaultSchema("NewApplication5");

            // Seed data
            // https://rehansaeed.com/migrating-to-entity-framework-core-seed-data/
            /* Eg.

            modelBuilder.Entity<Car>().HasData(
                new Car() { CarId = 1, Make = "Ferrari", Model = "F40" },
                new Car() { CarId = 2, Make = "Ferrari", Model = "F50" },
                new Car() { CarId = 3, Make = "Labourghini", Model = "Countach" });
            */
        }
    }
}