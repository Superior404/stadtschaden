namespace API.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phonenumber { get; set; }
        public string Describtion { get; set; }
        public string Location { get; set; }
        // TODO own enum for category maybe
        public string Catergory { get; set; }
    }
}