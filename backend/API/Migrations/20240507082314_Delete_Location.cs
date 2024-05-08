using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Delete_Location : Migration
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
                newName: "ImageURL");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "617e143e-8c2b-47c6-bf9a-381c3bc66b07", null, "Admin", "ADMIN" },
                    { "a146cf83-7aee-44ec-a9dd-25ec1c2dd8dc", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "617e143e-8c2b-47c6-bf9a-381c3bc66b07");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a146cf83-7aee-44ec-a9dd-25ec1c2dd8dc");

            migrationBuilder.RenameColumn(
                name: "ImageURL",
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
