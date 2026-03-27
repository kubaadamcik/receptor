using MediatR;
using receptor.Application.Recipes.DTOs;

namespace receptor.Application.Recipes.Commands.CreateRecipe;

public record CreateRecipeCommand (CreateRecipeDto RecipeDto) : IRequest<Guid>;