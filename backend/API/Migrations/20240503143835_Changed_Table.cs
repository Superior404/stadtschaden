using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Changed_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4435962e-25f7-4a5f-95f3-d8134e53eab0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ec1dc9f-c03e-4377-ad15-ea6f4276b6b7");

            migrationBuilder.RenameColumn(
                name: "Describtion",
                table: "Tickets",
                newName: "Description");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "33ed2d9a-12bc-4990-b736-9c05486255f5", null, "Member", "MEMBER" },
                    { "3d437230-0d8d-4081-b664-602a8bb9cdf7", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "33ed2d9a-12bc-4990-b736-9c05486255f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3d437230-0d8d-4081-b664-602a8bb9cdf7");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Tickets",
                newName: "Describtion");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4435962e-25f7-4a5f-95f3-d8134e53eab0", null, "Member", "MEMBER" },
                    { "5ec1dc9f-c03e-4377-ad15-ea6f4276b6b7", null, "Admin", "ADMIN" }
                });
        }
    }
}
