using Microsoft.AspNetCore.Identity;

namespace receptor.Domain.Entities;

public class User : IdentityUser
{
    public List<Recipe> Recipes { get; set; }
} 