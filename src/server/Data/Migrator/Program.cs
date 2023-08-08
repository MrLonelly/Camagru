using Camagru.Persistence.DbContext;
using Camagru.Persistence.Seeds;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var configurationBuilder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

var configuration = configurationBuilder.Build();
var connectionString = configuration.GetConnectionString("Default") ?? string.Empty;

var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>()
    .UseSqlServer(connectionString);

using var sc = new AppDbContext(optionsBuilder.Options);
Console.WriteLine("Start migration");
    
sc.Database.Migrate();
new DbInitializer(sc).Seed();
    
Console.WriteLine("End migration");
