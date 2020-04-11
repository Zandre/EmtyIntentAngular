

using System;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestProject.NewApplication5.Domain;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.EFMapping", Version = "1.0")]

namespace TestProject.NewApplication5.Infrastructure.Data
{
    public class SithLordsMapping : IEntityTypeConfiguration<SithLords>
    {
        public void Configure(EntityTypeBuilder<SithLords> builder)
        {
            builder.ToTable("SithLords", "dbo");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("Id");
            builder.Property(x => x.Master)
                .IsRequired();

            builder.Property(x => x.Apprentice)
                .IsRequired();

        }
    }
}