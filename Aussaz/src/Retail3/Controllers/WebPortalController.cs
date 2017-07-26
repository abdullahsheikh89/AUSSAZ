using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Retail3.Controllers
{
    public class WebPortalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Clearance()
        {
            return View();
        }
        public IActionResult NewArrivals()
        {
            return View();
        }
    }
}