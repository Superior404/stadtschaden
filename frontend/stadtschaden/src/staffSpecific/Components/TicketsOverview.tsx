import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Ticket {
    [key: string]: any; // Dynamic interface to accommodate any field names
}


const TicketsOverview = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]); // State for tickets data
    const [fieldNames, setFieldNames] = useState<string[]>([]); // State for field names

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


    return (
        <div className="">
            {tickets.length > 0 ? (
                <table className="table-auto w-full text-left">
                    <thead className='bg-darkgray text-white border border-darkgray '>
                        <tr>
                            {fieldNames.map((fieldName) => (
                                <th key={fieldName} className="px-4 py-2 ">
                                    {fieldName}
                                </th>
                            ))}
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <tr key={ticket.id} className="border border-darkgray ">
                                {fieldNames.map((fieldName) => (
                                    <td key={fieldName} className=" p-2">
                                        {ticket[fieldName]}
                                    </td>
                                ))}
                                <td className="p-2">
                                    <Link
                                        className="hover:text-darkgrayHighlight  font-bold py-2 px-4 rounded-xl "
                                        to={`/staff/singleTicket/?ticketID=${ticket.id}`}
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">No tickets found.</p>
            )}
        </div>
    )
}

export default TicketsOverview