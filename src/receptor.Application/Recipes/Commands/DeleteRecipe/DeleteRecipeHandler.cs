using MediatR;
using receptor.Application.Interfaces;

namespace receptor.Application.Recipes.Commands.DeleteRecipe;

public class DeleteRecipeHandler : IRequestHandler<DeleteRecipeCommand>
{
    private readonly IRecipeRepository _repository;

    public DeleteRecipeHandler(IRecipeRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(DeleteRecipeCommand request, CancellationToken ct)
    {
        await _repository.DeleteAsync(request.Uuid, ct);
    }
}