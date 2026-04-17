using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using receptor.Application.Interfaces;
using receptor.Infrastructure.Persistence;
using receptor.Infrastructure.Repositories;
using receptor.Infrastructure.Services;

namespace receptor.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
        });

        services.AddScoped<IRecipeRepository, RecipeRepository>();
        services.AddScoped<ITokenService, TokenService>();

        return services;
    }
}