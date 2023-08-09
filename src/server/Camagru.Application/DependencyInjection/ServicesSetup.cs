using System.Reflection;
using Camagru.Application.Interfaces;
using Camagru.Application.Services;
using Microsoft.Extensions.DependencyInjection;
using MediatR;

namespace Camagru.Application.DependencyInjection;

public static class ServicesSetup
{
    public static IServiceCollection AddCamagruApplication(this IServiceCollection services)
    {
        services.AddMediatR(Assembly.GetExecutingAssembly());
        services.AddScoped<IJwtTokenService, JwtTokenService>();

        return services;
    }
    
}