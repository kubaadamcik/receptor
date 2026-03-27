using MediatR;
using receptor.Domain.Entities;

namespace receptor.Application.Recipes.Commands.DeleteRecipe;

public record DeleteRecipeCommand (string Uuid) : IRequest;