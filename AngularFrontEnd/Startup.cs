using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using TestProject.NewApplication5.Infrastructure.Data;
using TestProject.NewApplication5.Application;
using TestProject.NewApplication5.Application.ServiceImplementation;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using TestProject.NewApplication5.Domain;
using SithLordsRepository = TestProject.NewApplication5.Infrastructure.Data.SithLordsRepository;

[assembly: IntentTemplate("Intent.AspNetCore.Startup", Version = "1.0")]
[assembly: DefaultIntentManaged(Mode.Fully)]

namespace AngularFrontEnd
{
    [IntentManaged(Mode.Ignore)]
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // [IntentManaged(Mode.Ignore)] // Uncomment this line to take over management of configuring services
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            IntentConfiguredServices(services);

            // ZB
            // This could automatically be done if I can get Intent to generate Unity correctly. 
            // For now manuall registration will do
            services.AddTransient<ISithLordsRepository, SithLordsRepository>();

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }

        public void IntentConfiguredServices(IServiceCollection services)
        {
            ConfigureDbContext(services);
            services.AddTransient<ITestService, TestService>();
        }

        private void ConfigureDbContext(IServiceCollection services)
        {
            services.AddDbContext<NewApplication5DbContext>(x => x.UseSqlServer(Configuration.GetConnectionString("NewApplication5DB")).UseLazyLoadingProxies());
        }
    }
}
