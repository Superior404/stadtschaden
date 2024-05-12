import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

interface Ticket {
  [key: string]: any; // Dynamic interface to accommodate any field names
}

const TicketsPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]); // State for tickets data
  const [fieldNames, setFieldNames] = useState<string[]>([]); // State for field names
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5020/api/Tickets');
        if (!response.ok) {
          throw new Error(`Error fetching tickets: ${response.statusText}`);
        }
        const data = await response.json();
        setTickets(data);

        // Extract field names from the first ticket object
        const firstTicket = data[0];
        setFieldNames(Object.keys(firstTicket));
      } catch (error) {
        console.error('Error fetching tickets:', error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  const handleViewTicket = (ticketId: number) => {
    navigate(`/staff/singleTicket/?ticketID=${ticketId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Tickets</h1>
      {tickets.length > 0 ? (
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              {fieldNames.map((fieldName) => (
                <th key={fieldName} className="px-4 py-2 border border-gray-300">
                  {fieldName}
                </th>
              ))}
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border border-gray-300">
                {fieldNames.map((fieldName) => (
                  <td key={fieldName} className="px-4 py-2">
                    {ticket[fieldName]}
                  </td>
                ))}
                <td className="px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleViewTicket(ticket.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No tickets found.</p>
      )}
    </div>
  );
};

export default TicketsPage;
