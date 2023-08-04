using Camagru.Persistence.Entities;
using Microsoft.EntityFrameworkCore;

namespace Camagru.Persistence.DbContext;

public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }
    
    private DbSet<User> Users { get; set; }
}