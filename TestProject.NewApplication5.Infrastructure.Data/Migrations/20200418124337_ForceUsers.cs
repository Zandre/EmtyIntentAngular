using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TestProject.NewApplication5.Infrastructure.Data.Migrations
{
    public partial class ForceUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "ForceUsers",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Side = table.Column<int>(nullable: false),
                    Speciality = table.Column<int>(nullable: false),
                    LightSaberColor = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForceUsers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ForceUsers",
                schema: "dbo");
        }
    }
}
