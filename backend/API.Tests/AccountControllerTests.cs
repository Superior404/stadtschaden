using API.Controllers;
using API.Entities;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Moq;

namespace API.Tests
{
    public class AccountControllerTests
    {
        [Fact]
        public async Task RegisterReturnsStatusCode201Async()
        {
            // Arrange
            var store = new Mock<IUserStore<User>>();
            var userManagerMock = new Mock<UserManager<User>>(store.Object, null, null, null, null, null, null, null, null);
            //var userManager = A.Fake<UserManager<User>>();
            var user = new User() { UserName = "testUser", Email="test@test.com"};
            var password = "testPw";
            userManagerMock.Setup(userM => userM.CreateAsync(user, password)).ReturnsAsync(IdentityResult.Success);
            // TODO mock the userManager with aspnet.mvc.Testing Library

            // Mock that register was successfull
            //A.CallTo(() => userManager.CreateAsync(user, password)).Returns(Task.FromResult(IdentityResult.Success));

            //var test = userManager.CreateAsync(user, password);
            var userManager = userManagerMock.Object;
            // config only needed if TokenService is used
            var configuration = A.Dummy<IConfiguration>();
            var controller = new AccountController(userManager, new Services.TokenService(userManagerMock.Object, configuration));

            var registerDto = new DTOs.RegisterDto() { Username = user.UserName, Password = password, Email = user.Email};

            // Act
            var actionResult = await controller.Register(registerDto);

            // Assert
            var result = actionResult as StatusCodeResult;
            Assert.Equal(new StatusCodeResult(201).StatusCode, result?.StatusCode );
        }
    }
}