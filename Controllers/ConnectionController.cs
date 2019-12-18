using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MoveMe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConnectionController : ControllerBase
    {

        private readonly ILogger<ConnectionController> _logger;

        public ConnectionController(ILogger<ConnectionController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public  String Get(String von, String bis, DateTime date)
        {
            String response;
            using (var wb = new WebClient())
            {
                response = wb.DownloadString(string.Format("http://transport.opendata.ch/v1/connections?from={0}&to={1}&date={2}", von, bis , date));
            }
            return response;
        }
    }
}
