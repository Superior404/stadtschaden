using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly StoreContext _context;
        public UsersController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // id specifies the parameter that we will get from route, for example api/tickets/3
        [HttpGet("{email}/{password}")]
        public async Task<ActionResult<User>> VerifyUser(string email, string password)
        {
            //try
            {
                var user = await _context.Users.FindAsync( email );

                if(user is null) return NotFound();

                return user;
            }
            /*
            catch (InvalidOperationException)
            {

                throw new Exception("more than one item");
            }
            */
        }

    }
}