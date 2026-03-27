namespace receptor.Application.Recipes.DTOs;

public class CreateRecipeDto
{
    public required string Name { get; set; }
    public required string Author { get; set; }
    public required string Description { get; set; }
    public required string[] Requirements { get; set; }
    public required string[] Guide { get; set; }
}