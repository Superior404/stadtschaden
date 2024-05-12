using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Added_Columns_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "33ed2d9a-12bc-4990-b736-9c05486255f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3d437230-0d8d-4081-b664-602a8bb9cdf7");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PostalCode",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StreetName",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2c6ab8c5-2957-48dc-bd56-0875d11acbf2", null, "Admin", "ADMIN" },
                    { "a0f95de0-5f9d-4b0c-98f2-5b6f8d7ed5cd", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2c6ab8c5-2957-48dc-bd56-0875d11acbf2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a0f95de0-5f9d-4b0c-98f2-5b6f8d7ed5cd");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "PostalCode",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "StreetName",
                table: "Tickets");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "33ed2d9a-12bc-4990-b736-9c05486255f5", null, "Member", "MEMBER" },
                    { "3d437230-0d8d-4081-b664-602a8bb9cdf7", null, "Admin", "ADMIN" }
                });
        }
    }
}
