using receptor.Domain.Entities;

namespace receptor.Application.Interfaces;

public interface IRecipeRepository
{
    Task<string> AddAsync(Recipe recipe, CancellationToken ct);
    Task<Recipe?> GetByIdAsync(string uuid, CancellationToken ct);
    Task<List<Recipe>> GetAllAsync(CancellationToken ct);
    Task UpdateAsync(Recipe recipe, CancellationToken ct);
    Task DeleteAsync(string uuid, CancellationToken ct);
    
}