using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
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
                    Describtion = "test desc",
                    Location = "86316",
                    Catergory = "Damage"
                },
                new Ticket
                {
                    Forename = "test",
                    Surname = "test",
                    Email = "test@hs-augsburg.de",
                    Phonenumber = "142412412142",
                    Describtion = "test2 desc",
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