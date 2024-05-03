using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// User Manager / Authentication / Authorization
builder.Services.AddIdentityCore<User>(opt => 
{
    // Register Options
    opt.User.RequireUniqueEmail = true;
}) // user manager
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<StoreContext>();
builder.Services.AddAuthentication(); // verifying true identity
builder.Services.AddAuthorization(); // verifying user access

// Add DB Context
builder.Services.AddDbContext<StoreContext>(opt => 
{
  opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(opt => 
{
    // Allow Header from Requester - Allow Get,Put... - Set cors with origin in reponse header
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
});

app.UseAuthorization();

app.MapControllers();

// to get ahold of the StoreContext/UserManager
var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();

// logger for Program.cs
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    // Migrate and create database if not already existing
    await context.Database.MigrateAsync();
    await DbInitializer.Initialize(context, userManager);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occured during migration");
}

app.Run();
