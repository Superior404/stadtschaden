using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class TicketsController : BaseApiController
    {

        private readonly StoreContext _context;

        public TicketsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Ticket>>> GetTickets()
        {
            return await _context.Tickets.ToListAsync();
        }

        // id specifies the parameter that we will get from route, for example api/tickets/3
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            return await _context.Tickets.FindAsync(id);
        }

        // [FromBody] to bind parameter to HTTP Post body
        [HttpPost]
        public ActionResult PostTicketData([FromBody] Ticket ticketData)
        {
            _context.Tickets.Add(ticketData);
            // TODO error handling
            _context.SaveChanges();

            return Ok("Ticket data saved sucessfully");
        }
    }
}