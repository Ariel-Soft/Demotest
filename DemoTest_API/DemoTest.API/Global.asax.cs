﻿using DemoTest.API.Models;
using DemoTest.DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace DemoTest.API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Database.SetInitializer<ApplicationDbContext>(null);
        }
        protected void Application_BeginRequest(object sender, EventArgs e)
        {


            var context = HttpContext.Current;
            var response = context.Response;

            response.AddHeader("Access-Control-Allow-Origin", "*");
            response.AddHeader("X-Frame-Options", "ALLOW-FROM *");

            if (context.Request.HttpMethod == "OPTIONS")
            {
                response.AddHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT");
                response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
                response.AddHeader("Access-Control-Max-Age", "1000000");
                response.End();
            }
        }
    }
}
