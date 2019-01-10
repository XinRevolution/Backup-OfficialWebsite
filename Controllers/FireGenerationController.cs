using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OfficialWebsite.Models;

namespace OfficialWebsite.Controllers
{
    public class FireGenerationController : Controller
    {
        // 首頁
        public IActionResult Intro()
        {
            ViewData["Preloader"] = AnimationType.FIRE;
            return View();
        }

        // 首頁 - 角色介紹
        public IActionResult Character(int id)
        {
            ViewData["Preloader"] = AnimationType.VERTICAL;
            return View();
        }

        // 時間軸
        public IActionResult TimeLine()
        {
            ViewData["Preloader"] = AnimationType.HORIZONTAL;
            return View();
        }

        // 時間軸 - 季
        public IActionResult Season(int id)
        {
            ViewData["Preloader"] = AnimationType.EXPAND;
            return View();
        }

        // 時間軸 - 季 - 章
        public IActionResult Chapter(int id)
        {
            ViewData["Preloader"] = AnimationType.EXPAND;
            return View();
        }

        // 世界觀
        public IActionResult WorldView()
        {
            ViewData["Preloader"] = AnimationType.VERTICAL;
            return View();
        }
    }
}
