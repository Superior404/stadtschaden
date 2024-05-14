using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ImageController : BaseApiController
    {
        // Directory where images are stored
        private const string ImageDirectory = "TicketImages";
        private readonly StoreContext _context;

        public ImageController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet("{ticketId}")]
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