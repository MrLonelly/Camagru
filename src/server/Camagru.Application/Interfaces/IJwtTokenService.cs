using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Camagru.Application.Models;

namespace Camagru.Application.Interfaces;

public interface IJwtTokenService
{
    public JwtSecurityToken GenerateJwtToken(UserModel model, List<Claim> additionalClaims);
}