using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Web.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        // GET api/projects
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Project 1", "Project 1" };
        }

        // GET api/projects/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/projects
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/projects/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/projects/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
