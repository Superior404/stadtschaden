using API.DTOs;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        // StoreContext not needed, because userManager automatically saves to StoreContext if something is added
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<User> userManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
        }

        /// <summary>
        /// Initial Login for user, JWT token not needed
        /// </summary>
        /// <param name="loginDto"></param>
        /// <returns></returns>
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            //var user = await _userManager.FindByNameAsync(loginDto.Username);
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
            {
                //Login failed
                return Unauthorized();
            }

            //Successful login
            return new UserDto
            {
                //Email = user.Email,
                Username = user.UserName,
                Token = await _tokenService.GenerateToken(user),
            };
        }

        /// <summary>
        /// Register a new user
        /// </summary>
        /// <param name="registerDto"></param>
        /// <returns></returns>
        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            var user = new User()
            {
                UserName = registerDto.Username,
                Email = registerDto.Email
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            // register failed
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            await _userManager.AddToRoleAsync(user, "Member");

            return Created();
        }

        /// <summary>
        /// Login if user was already logged in and received JWT Token
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet("currentUser")]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            // Takes user name out of the claim from the token
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            return new UserDto
            {
                //Email = user.Email,
                Username = user.UserName,
                Token = await _tokenService.GenerateToken(user)
            };
        }

        [Authorize]
        [HttpGet("TestToken")]
        public ActionResult TestToken()
        {
            return StatusCode(200);
        }

    }
}