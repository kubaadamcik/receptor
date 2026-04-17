using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using receptor.Application.Auth.DTOs;
using receptor.Application.Interfaces;
using receptor.Domain.Entities;

namespace receptor.Presentation.Controllers;

[ApiController]
[Route("/api/auth/")]
public class AuthController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly ITokenService _tokenService;

    public AuthController(UserManager<User> userManager, ITokenService tokenService)
    {
        _userManager = userManager;
        _tokenService = tokenService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        var user = await _userManager.FindByEmailAsync(dto.Email);

        if (user is null || await _userManager.CheckPasswordAsync(user, dto.Password))
            return BadRequest("Neplatné přihlašovací údaje");

        var token = _tokenService.GenerateToken(user);

        return Ok(new {token});
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        var user = new User()
        {
            UserName = dto.Username,
            Email = dto.Email,
        };

        var result = await _userManager.CreateAsync(user, dto.Password);

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        var token = _tokenService.GenerateToken(user);

        return Ok(token);
    }

    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> Me()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        
        if (userId is null)
            return BadRequest("Uživatel nenalezen");
        
        var user = await _userManager.FindByIdAsync(userId);
        
        if (user is null)
            return BadRequest("Uživatel nenalezen");

        return Ok(user.Id);
    }
}