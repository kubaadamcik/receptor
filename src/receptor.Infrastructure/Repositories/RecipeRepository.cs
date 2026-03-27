using receptor.Application.Interfaces;
using receptor.Domain.Entities;
using receptor.Infrastructure.Persistence;

namespace receptor.Infrastructure.Repositories;

public class RecipeRepository : IRecipeRepository
{
    private readonly ApplicationDbContext _db;

    public RecipeRepository(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<string> AddAsync(Recipe recipe, CancellationToken ct)
    {
        await _db.Recipes.AddAsync(recipe, ct);
        await _db.SaveChangesAsync(ct);
        return recipe.Uuid;
    }

    public async Task<Recipe> GetByIdAsync(string uuid, CancellationToken ct)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Recipe>> GetAllAsync(CancellationToken ct)
    {
        throw new NotImplementedException();
    }

    public async Task UpdateAsync(Recipe recipe, CancellationToken ct)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteAsync(Recipe recipe, CancellationToken ct)
    {
        throw new NotImplementedException();
    }
}