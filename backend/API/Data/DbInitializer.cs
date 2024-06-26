using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                };

                // Automatically saves user to database no additional save needed
                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, ["Member", "Admin"]);

                var test_user = new User
                {
                    UserName = "test_user",
                    Email = "test_user@test.com"
                };

                await userManager.CreateAsync(test_user, "1234QERTqwert.,");
                await userManager.AddToRolesAsync(test_user, ["Member", "Admin"]);
            }

            // so products aren't reseeded if there are already in database
            if (context.Tickets.Any()) return;

            var tickets = new List<Ticket>
            {
                new Ticket
                {
                    Forename = "Sebastian",
                    Surname = "Riedmiller",
                    Email = "sebastian.riedmiller@test.com",
                    Phone_Number = "12541512512",
                    Description = "Schlagloch",
                    Category = "Damage",
                    Postal_code = "86154",
                    Street_name = "Teststraße",
                    City = "Augsburg"
                },
                new Ticket
                {
                    Forename = "Peter",
                    Surname = "Lustig",
                    Email = "peterlustig@test.de",
                    Phone_Number = "142412412142",
                    Description = "Aufwölbung",
                    Category = "Damage",
                    Postal_code = "86316",
                    Street_name = "zufallstraße",
                    City = "Friedberg"
                }
            };

            // Insert tickets into database
            context.Tickets.AddRange(tickets);

            context.SaveChanges();
        }
    }
}