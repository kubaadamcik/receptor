namespace receptor.Application.Recipes.DTOs;

public class CreateRecipeDto
{
    public required string Name { get; set; }
    public required string Author { get; set; }
    public required string[] Requirements { get; set; }
    public required string[] Process { get; set; }
}