using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class TicketsController : BaseApiController
    {
        private readonly StoreContext _context;

        // Directory to store uploaded images
        private const string ImageDirectory = "TicketImages";

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

        [HttpPost]
        public async Task<IActionResult> PostData(
            [FromForm] Ticket ticketData,
            [FromForm] IFormFile image
        )
        {
            // Check if the image file is null or empty
            if (image == null || image.Length == 0)
            {
                return BadRequest("No image file uploaded.");
            }

            // Define the directory to save the image file
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), ImageDirectory);

            // Check if the directory exists, if not, create it
            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            // Generate a unique filename for the image
            string fileName = Path.GetFileNameWithoutExtension(image.FileName);
            string fileExtension = Path.GetExtension(image.FileName);
            string uniqueFileName = $"{fileName}_{DateTime.Now:yyyyMMddHHmmssfff}{fileExtension}";

            // Combine directory path with the unique filename
            string filePath = Path.Combine(directoryPath, uniqueFileName);

            // Save the image file to the server
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(fileStream);
            }

            // FilePath to image
            ticketData.FilePath = uniqueFileName;

            // Process JSON data as needed
            _context.Tickets.Add(ticketData);

            // TODO error handling
            _context.SaveChanges();

            return Ok("Ticket data saved sucessfully");
        }

        [HttpGet("Image/{ticketId}")]
        public async Task<ActionResult> GetImage(int ticketId)
        {
            // Fetch FilePath
            var ticket = await _context.Tickets.FindAsync(ticketId);
            var filePath = ticket.FilePath ?? throw new Exception("filePath not found");

            // Get file extension out of path
            var fileExtensionIndex = filePath.LastIndexOf('.');
            var fileExtension = filePath[(fileExtensionIndex + 1)..];

            // Image Directory path
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), ImageDirectory);
            string imagePath = Path.Combine(directoryPath, filePath);

            if (System.IO.File.Exists(imagePath))
            {
                // Return the image file as a FileStreamResult
                return PhysicalFile(imagePath, $"image/{fileExtension}");
            }
            else
            {
                return NotFound(); // Image not found
            }
        }

    }
}
