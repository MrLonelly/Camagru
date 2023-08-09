using Camagru.Application.Models;
using FluentValidation;

namespace Camagru.Application.Validations;

public class UserValidation : AbstractValidator<UserModel>
{
    public UserValidation()
    {
        RuleFor(u => u.Username).NotEmpty().Length(6, 32);
        RuleFor(u => u.Email).NotEmpty().EmailAddress().WithMessage("Please specify an email");
    }
}