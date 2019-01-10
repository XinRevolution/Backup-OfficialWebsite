using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OfficialWebsite.Models;

namespace OfficialWebsite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Preloader"] = AnimationType.HORIZONTAL;
            return View();
        }

        public IActionResult News()
        {
            ViewData["Preloader"] = AnimationType.VERTICAL;
            return View();
        }

        public IActionResult Issues()
        {
            ViewData["Preloader"] = AnimationType.VERTICAL;
            return View();
        }

        public IActionResult Issue()
        {
            ViewData["Preloader"] = AnimationType.NONE;
            return View();
        }

        public IActionResult Works()
        {
            ViewData["Preloader"] = AnimationType.HORIZONTAL;
            return View();
        }
    }
}
