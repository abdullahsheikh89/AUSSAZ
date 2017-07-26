using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Retail3.Controllers
{
    public class PayrollController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Attendance()
        {
            return View();
        }
        public IActionResult Payroll()
        {
            return View();
        }

        public IActionResult PayrollStructure()
        {
            return View();
        }
    }
}