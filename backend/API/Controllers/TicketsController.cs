using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {

        private readonly StoreContext context;

        public TicketsController(StoreContext context)
        {
            this.context = context;            
        }

        [HttpGet]
        public ActionResult<List<Ticket>> GetTickets()
        {
            var tickets = context.Tickets.ToList();

            // Ok is 200 response type
            return Ok(tickets);
        }

        // id specifies the parameter that we will get from route, for example api/tickets/3
        [HttpGet("{id}")]
        public ActionResult<Ticket> GetProduct(int id)
        {
            return context.Tickets.Find(id);
        }
    }
}