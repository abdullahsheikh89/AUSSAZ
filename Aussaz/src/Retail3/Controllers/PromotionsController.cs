using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Retail3.Controllers
{
    public class PromotionsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Combo()
        {
            return View();
        }
    }
}