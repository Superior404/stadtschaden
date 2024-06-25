using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace API.Tests
{
    public class TicketsControllerTests
    {
        [Fact]
        public void GetTicketsReturnsAllTickets()
        {
            // Arrange
            var dbOptionsBuilder = new DbContextOptionsBuilder<StoreContext>();
            var storeContextMock = new Mock<StoreContext>(dbOptionsBuilder.Options);

            /*
            var data = new List<Ticket>
            {
                new() { Id = 1 },
                new() { Id = 2 },
             };
            */

            var mockDbSet = new Mock<DbSet<Ticket>>();
            //mockDbSet.Setup(d => d.Add(It.IsAny<Ticket>())).Callback<Ticket>(data.Add);
            //storeContextMock.SetupProperty(storeC => storeC.Tickets, mockDbSet.Object);
            storeContextMock.Setup(storeC => storeC.Tickets).Returns(mockDbSet.Object);
            mockDbSet.Setup(dbSet => dbSet.FindAsync(It.IsAny<int>())).ReturnsAsync( () =>  new Ticket() { Id=2 }  );
            
            
            var fakeStoreContext = storeContextMock.Object;
            

            var ticketsController = new TicketsController(fakeStoreContext);

            // Act
            var ticket = ticketsController.GetTicket(2);

            // Assert


        }
    }
}
