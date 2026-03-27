using Microsoft.EntityFrameworkCore;
using receptor.Domain.Entities;

namespace receptor.Infrastructure.Persistence;

public class ApplicationDbContext : DbContext
{
    public DbSet<Recipe> Recipes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Recipe>()
            .HasKey(r => r.Uuid);
    }
}