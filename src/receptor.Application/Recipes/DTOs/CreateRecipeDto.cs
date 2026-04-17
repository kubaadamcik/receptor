namespace receptor.Application.Recipes.DTOs;

public class CreateRecipeDto
{
    public required string Name { get; set; }
    public required string UserUuid { get; set; }
    public required string Description { get; set; }
    public int Time { get; set; }
    public required string[] Ingredients { get; set; }
    public required string[] Process { get; set; }
    public string? ImagePath { get; set; }
}