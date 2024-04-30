using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseController
    {
        /*
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
        [HttpPost("login")]
        public async Task<ActionResult<User>> VerifyUser([FromBody] User userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(userModel.Email == null) return BadRequest("email missing");
            if(userModel.Password == null) return BadRequest("password missing");

            try
            {
                var user = await _context.Users.FindAsync(userModel.Email);

                if(user is null) return NotFound($"There is no user with following email: {userModel.Email}");

                if (user.Password != userModel.Password) return BadRequest("wrong password");

                return user;
            }
            
            catch (InvalidOperationException)
            {

                throw new Exception("more than one item");
            }
            
        }

        [HttpPost]
        public ActionResult InsertUserData([FromBody] User user)
        {
            _context.Users.Add(user);
            // TODO Error Handling
            _context.SaveChanges();

            return Ok("User data saved sucessfully");
        }

*/
    }
}