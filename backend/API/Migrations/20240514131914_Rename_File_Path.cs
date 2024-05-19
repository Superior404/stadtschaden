using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Rename_File_Path : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2c6ab8c5-2957-48dc-bd56-0875d11acbf2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a0f95de0-5f9d-4b0c-98f2-5b6f8d7ed5cd");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Tickets",
                newName: "FilePath");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6c39b97a-12bd-45eb-8365-e7bc4f6c6a60", null, "Member", "MEMBER" },
                    { "c1ebfe23-9748-4c3b-bd04-d0eefed33b54", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6c39b97a-12bd-45eb-8365-e7bc4f6c6a60");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c1ebfe23-9748-4c3b-bd04-d0eefed33b54");

            migrationBuilder.RenameColumn(
                name: "FilePath",
                table: "Tickets",
                newName: "Location");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2c6ab8c5-2957-48dc-bd56-0875d11acbf2", null, "Admin", "ADMIN" },
                    { "a0f95de0-5f9d-4b0c-98f2-5b6f8d7ed5cd", null, "Member", "MEMBER" }
                });
        }
    }
}
