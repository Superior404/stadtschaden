import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for getting URL parameters

interface Ticket {
  id: number;
  forename: string;
  surname: string;
  email: string;
  phonenumber: string;
  describtion: string;
  location: string;
  catergory: string;
}

interface RouteParams {
  // Define type for URL parameters
  ticketID: string;
}

const SingleTicketPage: React.FC = () => {
  const [ticket, setTicket] = useState<Ticket | null>(null); // State for ticket data
  const { ticketId } = useParams<RouteParams>(); // Use the defined type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5020/api/Tickets/${ticketId}`,
        );
        if (!response.ok) {
          throw new Error(`Error fetching ticket: ${response.statusText}`);
        }
        const data = await response.json();
        setTicket(data);
      } catch (error) {
        console.error("Error fetching ticket:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    if (ticketId) {
      fetchData();
    }
  }, [ticketId]); // Dependency array ensures fetch only happens when ticketId changes

  return (
    <div className="container mx-auto px-4 py-8">
      {ticket ? (
        <div className="shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Ticket Details</h2>
          <ul className="list-disc pl-4">
            <li>ID: {ticket.id}</li>
            <li>Forename: {ticket.forename}</li>
            <li>Surname: {ticket.surname}</li>
            <li>Email: {ticket.email}</li>
            <li>Phone Number: {ticket.phonenumber}</li>
            <li>Description: {ticket.describtion}</li>
            <li>Location: {ticket.location}</li>
            <li>Category: {ticket.catergory}</li>
          </ul>
        </div>
      ) : (
        <p className="text-center text-gray-500">Ticket not found.</p>
      )}
    </div>
  );
};

export default SingleTicketPage;
