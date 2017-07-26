using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Retail3.Controllers
{
    public class TaxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult SalesTax()
        {
            return View();
        }
        public IActionResult OtherTax()
        {
            return View();
        }
    }
}