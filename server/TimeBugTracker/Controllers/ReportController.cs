using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TimeBugTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }
        
    }
}
