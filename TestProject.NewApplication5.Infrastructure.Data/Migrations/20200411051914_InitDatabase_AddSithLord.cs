using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TestProject.NewApplication5.Infrastructure.Data.Migrations
{
    public partial class InitDatabase_AddSithLord : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "SithLords",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Master = table.Column<string>(nullable: false),
                    Apprentice = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SithLords", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SithLords",
                schema: "dbo");
        }
    }
}
