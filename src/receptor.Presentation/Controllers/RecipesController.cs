using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using receptor.Application.Recipes.Commands.CreateRecipe;
using receptor.Application.Recipes.Commands.DeleteRecipe;
using receptor.Application.Recipes.Queries.GetAllRecipes;
using receptor.Application.Recipes.Queries.GetRecipeById;

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
    [Authorize]
    public async Task<IActionResult> Create([FromBody] CreateRecipeCommand command)
    {
        var uuid = await _mediator.Send(command);
        return Ok(uuid);
    }

    [HttpDelete("{uuid}")]
    [Authorize]
    public async Task<IActionResult> Delete(string uuid)
    {
        var recipe = await _mediator.Send(new GetRecipeByIdQuery(uuid));

        if (recipe is null) return NotFound();
        
        await _mediator.Send(new DeleteRecipeCommand(uuid));
        return NoContent();
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var recipes = await _mediator.Send(new GetAllRecipesQuery());

        return Ok(recipes);
    }

    [HttpGet("{uuid}")]
    public async Task<IActionResult> GetById(string uuid)
    {
        var recipe = await _mediator.Send(new GetRecipeByIdQuery(uuid));


        return recipe is null ? NotFound() : Ok(recipe);
    }
}