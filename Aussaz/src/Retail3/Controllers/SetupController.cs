using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Retail3.Controllers
{
    public class SetupController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Department()
        {
            return View();
        }
        public IActionResult SubDepartment()
        {
            return View();
        }
        public IActionResult Color()
        {
            return View();
        }
        public IActionResult MainMenue()
        {
            return View();
        }
        public IActionResult Fabrics()
        {
            return View();
        }
        public IActionResult Shipper()
        {
            return View();
        }

    }
}