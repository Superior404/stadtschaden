using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Changed_Names : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "StreetName",
                table: "Tickets",
                newName: "Street_name");

            migrationBuilder.RenameColumn(
                name: "PostalCode",
                table: "Tickets",
                newName: "Postal_code");

            migrationBuilder.RenameColumn(
                name: "Phonenumber",
                table: "Tickets",
                newName: "Phone_Number");

            migrationBuilder.RenameColumn(
                name: "FilePath",
                table: "Tickets",
                newName: "File_Path");

            migrationBuilder.RenameColumn(
                name: "Catergory",
                table: "Tickets",
                newName: "Category");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4a875054-6b8f-4779-a13e-9e5d5e68afa3", null, "Member", "MEMBER" },
                    { "51257609-5e41-4a6b-92d9-8c11c609a124", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4a875054-6b8f-4779-a13e-9e5d5e68afa3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "51257609-5e41-4a6b-92d9-8c11c609a124");

            migrationBuilder.RenameColumn(
                name: "Street_name",
                table: "Tickets",
                newName: "StreetName");

            migrationBuilder.RenameColumn(
                name: "Postal_code",
                table: "Tickets",
                newName: "PostalCode");

            migrationBuilder.RenameColumn(
                name: "Phone_Number",
                table: "Tickets",
                newName: "Phonenumber");

            migrationBuilder.RenameColumn(
                name: "File_Path",
                table: "Tickets",
                newName: "FilePath");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Tickets",
                newName: "Catergory");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6c39b97a-12bd-45eb-8365-e7bc4f6c6a60", null, "Member", "MEMBER" },
                    { "c1ebfe23-9748-4c3b-bd04-d0eefed33b54", null, "Admin", "ADMIN" }
                });
        }
    }
}
