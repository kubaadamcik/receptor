using System.ComponentModel.DataAnnotations;

namespace receptor.Application.Auth.DTOs;

public class LoginDto
{
    [MaxLength(100)] [EmailAddress] public required string Email { get; set; }
    [MaxLength(100)] public required string Password { get; set; }
}