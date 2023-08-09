using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Camagru.Application.Interfaces;
using Camagru.Application.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Camagru.Application.Services;

public class JwtTokenService : IJwtTokenService
{
    private readonly IConfiguration _configuration;
    
    public JwtTokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    public JwtSecurityToken GenerateJwtToken(UserModel model, List<Claim> additionalClaims)
    {
        var uniqueKey = _configuration.GetValue<string>("Jwt:Key");
        var issuer = _configuration.GetValue<string>("Jwt:Issuer");
        var audience = _configuration.GetValue<string>("Jwt:Audience");
        var expiration = _configuration.GetValue<int>("Jwt:Expiration");
        
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, model.Username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };
        
        if (additionalClaims.Any())
        {
            var claimList = new List<Claim>(claims);

            claimList.AddRange(additionalClaims);
            claims = claimList.ToArray();
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(uniqueKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        return new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            expires: DateTime.UtcNow.Add(new TimeSpan(expiration, 0, 0, 0)),
            claims: claims,
            signingCredentials: creds
        );
    }
}