using System.ComponentModel.DataAnnotations;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace receptor.Domain.Entities;

public class Recipe
{
    public string Uuid { get; set; } = Guid.NewGuid().ToString();
    public required string Name { get; set; }
    public string AuthorUuid { get; set; }
    public User User { get; set; }
    public int Time { get; set; }
    public string Description { get; set; }
    public required string[] Ingredients { get; set; }
    public required string[] Process { get; set; }
    public string? ImagePath { get; set; }
    
}