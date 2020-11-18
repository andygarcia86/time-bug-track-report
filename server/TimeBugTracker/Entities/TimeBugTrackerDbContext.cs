using Microsoft.EntityFrameworkCore;

namespace TimeBugTracker.Entities
{
    public class TimeBugTrackerDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            //TODO: Read from configuration
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=TimeBugTracker;Trusted_Connection=True;");
            

        }

    }
}
