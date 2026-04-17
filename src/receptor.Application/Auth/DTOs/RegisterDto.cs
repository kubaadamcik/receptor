using System.ComponentModel.DataAnnotations;

namespace receptor.Application.Auth.DTOs;

public class RegisterDto
{
    [MaxLength(50)] public required string Username { get; set; }
    [MaxLength(50)] public required string Password { get; set; }
    [MaxLength(50)] [EmailAddress] public required string Email { get; set; }
}