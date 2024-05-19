using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phonenumber { get; set; }
        public string Description { get; set; }
        public string Catergory { get; set; }
        public string StreetName { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string FilePath { get; set; }
    }
}