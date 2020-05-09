namespace Domain.Entities
{
    public class Project : Entity<int>, ISoftDelete
    {
        public Project()
        {
        }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsDeleted { get; set; }
    }
}
