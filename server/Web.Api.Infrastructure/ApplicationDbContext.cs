using Microsoft.EntityFrameworkCore;
using Web.Api.Infrastructure.Data.Entities;

namespace Web.Api.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        DbSet<Project> Projects { get; set; }
    }
}
