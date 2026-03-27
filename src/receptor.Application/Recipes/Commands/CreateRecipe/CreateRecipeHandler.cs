using MediatR;
using receptor.Application.Interfaces;
using receptor.Application.Recipes.DTOs;
using receptor.Domain.Entities;

namespace receptor.Application.Recipes.Commands.CreateRecipe;

public class CreateRecipeHandler : IRequestHandler<CreateRecipeCommand, string>
{
    private readonly IRecipeRepository _repository;

    public CreateRecipeHandler(IRecipeRepository repository)
    {
        _repository = repository;
    }

    public async Task<string> Handle(CreateRecipeCommand request, CancellationToken cancellationToken)
    {
        var recipe = new Recipe()
        {
            Author = request.RecipeDto.Author, Name = request.RecipeDto.Name,
            Requirements = request.RecipeDto.Requirements, Guide = request.RecipeDto.Guide,
            Description = request.RecipeDto.Description
        };
        return await _repository.AddAsync(recipe, cancellationToken);
    }
}