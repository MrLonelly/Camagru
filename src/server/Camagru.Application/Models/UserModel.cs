namespace Camagru.Application.Models;

public class UserModel
{
    public Guid? Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Username { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public RoleModel? Role { get; set; }
}