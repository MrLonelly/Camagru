﻿using Camagru.Persistence.DbContext;
using Camagru.Persistence.Seeds;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var configurationBuilder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

IConfigurationRoot configuration = configurationBuilder.Build();
string connectionString = configuration.GetConnectionString("Default");

DbContextOptionsBuilder<AppDbContext> optionsBuilder = new DbContextOptionsBuilder<AppDbContext>()
    .UseNpgsql(connectionString);

using (AppDbContext sc = new AppDbContext(optionsBuilder.Options))
{
    Console.WriteLine("Start migration");
    
    sc.Database.Migrate();
    new DbInitializer(sc).Seed();
    
    Console.WriteLine("End migration");
}
    