using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace receptor.Presentation.Controllers;

public class RecipesController : ControllerBase
{
    private Mediator _mediator { get; set; }

    public RecipesController(Mediator mediator)
    {
        _mediator = mediator;
    }
}