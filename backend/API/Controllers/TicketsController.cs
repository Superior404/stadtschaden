using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
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
        public async Task<ActionResult<Ticket>> GetProduct(int id)
        {
            return await _context.Tickets.FindAsync(id);
        }
    }
}