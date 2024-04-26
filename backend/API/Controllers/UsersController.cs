using

using API.Data;


namespace API.Controllers
{
    public class UsersController : BaseController
    {
         private readonly StoreContext _context;
        public UsersController(StoreContext context)
        {
            _context = context;
    
        }
    }
}