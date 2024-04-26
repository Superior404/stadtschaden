using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }
        
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<User> Users { get; set; }

    }
}