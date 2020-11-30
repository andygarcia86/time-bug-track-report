using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace TimeBugTracker.Entities
{
    public class DataDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }

        private readonly IHttpContextAccessor _accessor;

        public DataDbContext(DbContextOptions options) : base(options)
        {

        }

        public DataDbContext(IHttpContextAccessor accessor, DbContextOptions options) : base(options)
        {
            _accessor = accessor;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            //TODO: Read from configuration using app settings
            optionsBuilder.UseSqlServer(@"Server=.\\; Database=TimeBugTracker; Trusted_Connection=True; MultipleActiveResultSets=True;");
            

        }

    }
}
