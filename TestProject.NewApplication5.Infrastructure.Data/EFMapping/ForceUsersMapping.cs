

using System;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestProject.NewApplication5.Domain;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.EFMapping", Version = "1.0")]

namespace TestProject.NewApplication5.Infrastructure.Data
{
    public class ForceUsersMapping : IEntityTypeConfiguration<ForceUsers>
    {
        public void Configure(EntityTypeBuilder<ForceUsers> builder)
        {
            builder.ToTable("ForceUsers", "dbo");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("Id");
            builder.Property(x => x.Name)
                .IsRequired();

            builder.Property(x => x.Side)
                .IsRequired();

            builder.Property(x => x.Speciality)
                .IsRequired();

            builder.Property(x => x.LightSaberColor)
                .IsRequired();

        }
    }
}