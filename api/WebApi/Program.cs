using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;

namespace WebApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Configuration
            .AddUserSecrets<Program>(optional: true)
            .AddEnvironmentVariables();

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend", policy =>
            {
                policy.WithOrigins("http://localhost:3000", "https://hvad-skal-jeg-stemme.vercel.app") // Tilføj begge origins her
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
        });


        // Add services to the container.

        builder.Services.AddControllers()
        .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
            });
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();


        var connectionString = builder.Configuration.GetConnectionString("db") ?? Environment.GetEnvironmentVariable("CONNECTION_STRING");
        builder.Services.AddDbContext<AppDbContext>(options => 
            options
                .UseNpgsql(connectionString)
                .UseSnakeCaseNamingConvention()
        );

        var app = builder.Build();

        app.UseCors("AllowFrontend");

        using (IServiceScope scope = app.Services.CreateScope())
        {
            try
            {
                AppDbContext dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                DbSeeder.SeedData(dbContext);
            }
            catch (Exception ex)
            {
                ILogger<Program> logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "Error seeding database");
            }
        }

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
