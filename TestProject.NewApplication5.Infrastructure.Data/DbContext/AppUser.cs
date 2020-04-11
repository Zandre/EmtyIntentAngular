using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestProject.NewApplication5.Infrastructure.Data.DbContext
{
    public class AppUser : IdentityUser
    {
        public AppUser(string firstName, string lastName, string email)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            UserName = email;
            EmailConfirmed = true;
        }

        // Extended Properties
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
