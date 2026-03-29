using MediatR;
using receptor.Application.Interfaces;
using receptor.Domain.Entities;

namespace receptor.Application.Recipes.Queries.GetRecipeById;

public class GetRecipeByIdHandler : IRequestHandler<GetRecipeByIdQuery, Recipe?>
{
    private readonly IRecipeRepository _repository;

    public GetRecipeByIdHandler(IRecipeRepository repository)
    {
        _repository = repository;
    }

    public async Task<Recipe?> Handle(GetRecipeByIdQuery request, CancellationToken ct)
    {
        return await _repository.GetByIdAsync(request.Uuid, ct);
    }
}