using FootballersAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FootballersAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FootballerController : ControllerBase
    {
        private readonly DataContext _context;

        public FootballerController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Footballer>>> GetFootballers()
        {
            return Ok(await _context.Footballers.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Footballer>>> CreateFootballer(Footballer footballer)
        {
            _context.Footballers.Add(footballer);
            await _context.SaveChangesAsync();
            return Ok(await _context.Footballers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Footballer>>> UpdateFootballer(Footballer footballer)
        {
            var dbFootballer = await _context.Footballers.FindAsync(footballer.Id);
            if (dbFootballer == null)
                return BadRequest("Footballer not found...");

            dbFootballer.FirstName = footballer.FirstName;
            dbFootballer.LastName = footballer.LastName;
            dbFootballer.Goals = footballer.Goals;
            dbFootballer.Team = footballer.Team;
            await _context.SaveChangesAsync();
            return Ok(await _context.Footballers.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Footballer>>> DeleteFootballer(int id)
        {
            var dbFootballer = await _context.Footballers.FindAsync(id);
            if (dbFootballer == null)
                return BadRequest("Footballer not found...");

            _context.Footballers.Remove(dbFootballer);
            await _context.SaveChangesAsync();
            return Ok(await _context.Footballers.ToListAsync());
        }
    }
}
