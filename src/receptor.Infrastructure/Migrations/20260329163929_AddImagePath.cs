using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace receptor.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddImagePath : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Requirements",
                table: "Recipes",
                newName: "Process");

            migrationBuilder.RenameColumn(
                name: "Guide",
                table: "Recipes",
                newName: "Ingredients");

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "Recipes",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "Recipes");

            migrationBuilder.RenameColumn(
                name: "Process",
                table: "Recipes",
                newName: "Requirements");

            migrationBuilder.RenameColumn(
                name: "Ingredients",
                table: "Recipes",
                newName: "Guide");
        }
    }
}
