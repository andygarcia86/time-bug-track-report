using Microsoft.EntityFrameworkCore;

namespace TimeBugTracker.Entities
{
    public class DataDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            //TODO: Read from configuration using app settings
            optionsBuilder.UseSqlServer(@"Server=.\\; Database=TimeBugTracker; Trusted_Connection=True; MultipleActiveResultSets=True;");
            

        }

    }
}
