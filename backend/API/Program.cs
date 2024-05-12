using System.Text;
using API.Data;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. Builder will make instances of these Services.

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

// Authenticate trough JWT Tokens - User needs to have JWT Token in HTTP Request Header for authentication endpoints
builder.Services.AddAuthentication( JwtBearerDefaults.AuthenticationScheme )
    .AddJwtBearer(opt => {
        // What Api validates against using this token
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            // Validate token based on the signature
            ValidateIssuerSigningKey = true,
            // Which key was used to sign signature to validate signature
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.
                GetBytes(builder.Configuration["JWTSettings:TokenKey"]))
        };
    });
builder.Services.AddAuthorization(); // verifying user access

// Scope = Entire Process of Request (Request - Logic applied - Response)
// Service is alive during the HTTP Request and will be dropped after
builder.Services.AddScoped<TokenService>();

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
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173");
});

// Authentication before Authorization
app.UseAuthentication();
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
