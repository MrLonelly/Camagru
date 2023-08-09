using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Camagru.Application.Interfaces;
using Camagru.Application.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace Camagru.Controllers;


[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IJwtTokenService _jwtTokenService;

    public AuthController(IJwtTokenService jwtTokenService, IConfiguration configuration)
    {
        _jwtTokenService = jwtTokenService;
    }

    [HttpPost("login")]
    public async Task<ActionResult<JwtResponseModel>> Login([FromBody] UserModel model)
    {
        var claims = new List<Claim>();
        
        claims.Add(new Claim("username", model.Username));
        claims.Add(new Claim("email", model.Email));

        if (model.Role is { Name: not null })
        {
            claims.Add(new Claim(ClaimTypes.Role, model.Role.Name));
        }

        var token = _jwtTokenService.GenerateJwtToken(model, claims);

        return Ok(new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token),
        });
    }
}