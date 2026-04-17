using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using receptor.Domain.Entities;

namespace receptor.Infrastructure.Persistence;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext<User>(options)
{
    public DbSet<Recipe> Recipes { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Recipe>()
            .HasKey(r => r.Uuid);

        modelBuilder.Entity<Recipe>().HasOne(r => r.User)
            .WithMany(u => u.Recipes)
            .HasForeignKey(r => r.AuthorUuid)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<User>()
            .HasKey(u => u.Id);
        
    }
}