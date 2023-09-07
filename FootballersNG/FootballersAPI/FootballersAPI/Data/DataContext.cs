using Microsoft.EntityFrameworkCore;

namespace FootballersAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Footballer> Footballers => Set<Footballer>();
    }
}
