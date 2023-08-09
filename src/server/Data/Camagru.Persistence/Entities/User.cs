namespace Camagru.Persistence.Entities;

public class User
{
   public Guid Id { get; set; }

   public string Name { get; set; } = string.Empty;

   public string Username { get; set; } = string.Empty;

   public string Email { get; set; } = string.Empty;

   public Guid RoleId { get; set; } = Guid.Empty;
   public Role Role { get; set; }
}