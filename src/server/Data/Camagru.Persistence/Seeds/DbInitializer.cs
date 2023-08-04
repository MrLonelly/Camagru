using Camagru.Persistence.DbContext;

namespace Camagru.Persistence.Seeds;

public class DbInitializer
{
    private readonly AppDbContext _dbContext;

    public DbInitializer(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void Seed()
    {
        
    }
}