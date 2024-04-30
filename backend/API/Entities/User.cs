
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class User
    {
        //public int Id { get; set; }
        [Key]
        public string Email { get; set; }
        public string Password { get; set; }

        
    }
}