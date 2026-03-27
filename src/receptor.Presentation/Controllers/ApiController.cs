using Microsoft.AspNetCore.Mvc;

namespace receptor.Presentation.Controllers;

[Controller]
[Route("/api")]
public class ApiController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok("API is working");
    }
}