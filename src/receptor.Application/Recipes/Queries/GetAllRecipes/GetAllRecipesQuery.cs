using MediatR;
using receptor.Domain.Entities;

namespace receptor.Application.Recipes.Queries.GetAllRecipes;

public record GetAllRecipesQuery : IRequest<List<Recipe>>;