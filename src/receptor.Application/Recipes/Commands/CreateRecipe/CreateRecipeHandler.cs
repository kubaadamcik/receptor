using MediatR;
using receptor.Application.Interfaces;
using receptor.Application.Recipes.DTOs;

namespace receptor.Application.Recipes.Commands.CreateRecipe;

public class CreateRecipeHandler : IRequestHandler<CreateRecipeCommand, Guid>
{
    private readonly IRecipeRepository _repository;

    public CreateRecipeHandler(IRecipeRepository repository)
    {
        _repository = repository;
    }

    public async Task<Guid> Handle(CreateRecipeCommand request, CancellationToken cancellationToken)
    {
        return await _repository.AddAsync(request.RecipeDto, cancellationToken);
    }
}