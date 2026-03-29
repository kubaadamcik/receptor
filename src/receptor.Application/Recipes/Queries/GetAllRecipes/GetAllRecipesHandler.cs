using MediatR;
using receptor.Application.Interfaces;
using receptor.Domain.Entities;

namespace receptor.Application.Recipes.Queries.GetAllRecipes;

public class GetAllRecipesHandler : IRequestHandler<GetAllRecipesQuery, List<Recipe>>
{
    private readonly IRecipeRepository _repository;

    public GetAllRecipesHandler(IRecipeRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Recipe>> Handle(GetAllRecipesQuery request, CancellationToken ct)
    {

        return await _repository.GetAllAsync(ct);
    }
}