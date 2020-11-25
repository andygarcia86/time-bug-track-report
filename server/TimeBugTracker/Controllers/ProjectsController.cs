using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TimeBugTracker.Entities;

namespace TimeBugTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        // GET api/projects
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public ActionResult<IEnumerable<Project>> Get()
        {
            var projects = new List<Project>();
            projects.Add(new Project { Id=1, Name="Levatas Web site" });
            projects.Add(new Project { Id=2, Name="Converge" });
            projects.Add(new Project { Id=3, Name="IBM1585 - Assessment" });
            projects.Add(new Project { Id=4, Name="IBM1821 - Smart Paper" });

            return projects;
        }

        // GET api/projects/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/projects
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/projects/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/projects/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
