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

        /*
        // [FromBody] to bind parameter to HTTP Post body
        [HttpPost]
        public ActionResult PostTicketData([FromBody] Ticket ticketData)
        {
            _context.Tickets.Add(ticketData);
            // TODO error handling
            _context.SaveChanges();

            return Ok("Ticket data saved sucessfully");
        }
        */

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage()
        {
            try
            {
                // Assuming the image is the first form file
                var file = Request.Form.Files[0];

                if (file.Length > 0)
                {
                    var fileName = $"{Guid.NewGuid().ToString()}{Path.GetExtension(file.FileName)}"; // Generate a unique file name
                    var filePath = Path.Combine(ImageDirectory, fileName); // Combine with directory path

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream); // Copy the uploaded file to the file stream
                    }

                    return Ok(new { FilePath = filePath }); // Return the file path or any other response as needed
                }

                return BadRequest("No file uploaded");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        

        [HttpPost]
        public async Task<IActionResult> PostData([FromForm] Ticket ticketData, [FromForm] IFormFile image)
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

            //TODO Filepath in database eintragen

            // Process JSON data as needed
            _context.Tickets.Add(ticketData);
            // TODO error handling
            _context.SaveChanges();

            return Ok("Ticket data saved sucessfully");
            //return Ok($"Image saved successfully at: {filePath}");
        }

    }
    
}