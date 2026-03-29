using MediatR;
using receptor.Domain.Entities;

namespace receptor.Application.Recipes.Queries.GetRecipeById;

public record GetRecipeByIdQuery (string Uuid): IRequest<Recipe?>;