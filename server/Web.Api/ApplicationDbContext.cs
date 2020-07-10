using Microsoft.EntityFrameworkCore;
using Web.Api.Data.Entities;

namespace Web.Api
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        DbSet<Project> Projects { get; set; }
    }
}
