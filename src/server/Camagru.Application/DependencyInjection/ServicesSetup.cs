using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using MediatR;

namespace Camagru.Application.DependencyInjection;

public static class ServicesSetup
{
    public static IServiceCollection AddCamagruApplication(this IServiceCollection services)
    {
        services.AddMediatR(Assembly.GetExecutingAssembly());

        return services;
    }
    
}