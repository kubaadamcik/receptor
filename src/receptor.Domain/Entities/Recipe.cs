using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace receptor.Domain.Entities;

public class Recipe
{
    public string Uuid { get; set; } = Guid.NewGuid().ToString();
        
    public required string Name { get; set; }
    public string Author { get; set; }
    public string Description { get; set; }
    public required string[] Requirements { get; set; } // TODO: Rename
    public required string[] Guide { get; set; }
    
    
}