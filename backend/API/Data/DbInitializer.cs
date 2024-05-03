using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                };

                // Automatically saves user to database no additional save needed
                await userManager.CreateAsync(user, "Pa§§w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa§§w0rd");
                await userManager.AddToRolesAsync(admin, ["Member", "Admin"]);
            }

            // so products aren't reseeded if there are already in database
            if(context.Tickets.Any()) return;

            var tickets = new List<Ticket>
            {
                new Ticket
                {
                    Forename = "Sebastian",
                    Surname = "Riedmiller",
                    Email = "sebastian.riedmiller@hs-augsburg.de",
                    Phonenumber = "12541512512",
                    Description = "test desc",
                    Location = "86316",
                    Catergory = "Damage"
                },
                new Ticket
                {
                    Forename = "test",
                    Surname = "test",
                    Email = "test@hs-augsburg.de",
                    Phonenumber = "142412412142",
                    Description = "test2 desc",
                    Location = "86316",
                    Catergory = "Damage"
                }
            };
            
            // Insert tickets into database
            context.Tickets.AddRange(tickets);

            context.SaveChanges();
        }
    }
}