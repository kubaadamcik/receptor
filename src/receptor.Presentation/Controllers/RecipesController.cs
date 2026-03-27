using MediatR;
using Microsoft.AspNetCore.Mvc;
using receptor.Application.Recipes.Commands.CreateRecipe;
using receptor.Application.Recipes.Commands.DeleteRecipe;
using receptor.Application.Recipes.Queries.GetAllRecipes;

namespace receptor.Presentation.Controllers;

[ApiController]
[Route("/api/recipes")]
public class RecipesController : ControllerBase
{
    private IMediator _mediator { get; set; }

    public RecipesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateRecipeCommand command)
    {
        var uuid = await _mediator.Send(command);
        return Ok(uuid);
    }

    [HttpDelete]
    public async Task<IActionResult> Delete([FromBody] DeleteRecipeCommand command)
    {
        await _mediator.Send(command);
        
        await _mediator.Send(command);
        return Ok(); // TODO: Add error handling
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var recipes = await _mediator.Send(new GetAllRecipesQuery());

        return Ok(recipes);
    }
    
    [HttpPost("/")]
}