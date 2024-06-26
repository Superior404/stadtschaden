using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone_Number { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Street_name { get; set; }
        public string Postal_code { get; set; }
        public string City { get; set; }
        public string File_Path { get; set; }
    }
}