using Microsoft.EntityFrameworkCore;
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

    public async Task<Recipe?> GetByIdAsync(string uuid, CancellationToken ct)
    {
        return await _db.Recipes.FirstOrDefaultAsync(r => r.Uuid == uuid, ct);
        
    }

    public async Task<List<Recipe>> GetAllAsync(CancellationToken ct)
    {
        return await _db.Recipes.ToListAsync(ct);
    }

    public async Task UpdateAsync(Recipe recipe, CancellationToken ct)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteAsync(string uuid, CancellationToken ct)
    {
        var recipe = await _db.Recipes.FirstOrDefaultAsync(r => r.Uuid == uuid, ct);

        if (recipe is null) return;

        _db.Recipes.Remove(recipe);
        await _db.SaveChangesAsync(ct);
    }
}