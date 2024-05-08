using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ImageController : BaseApiController
    {
        // Directory where images are stored
        private const string ImageDirectory = "TicketImages"; 
        
        [HttpGet("{imageName}")]
        public ActionResult GetImage(string imageName)
        {
            var imagePath = Path.Combine(ImageDirectory, imageName);

            // TODO prüfen welcher Dateiname

            // Start from root API Directory
            if (System.IO.File.Exists(imagePath))
            {
                // Return the image file as a FileStreamResult
                return PhysicalFile(imagePath, "image/jpeg");
            }
            else
            {
                return NotFound(); // Image not found
            }
        }
        
    }
}