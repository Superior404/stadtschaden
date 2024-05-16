import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useToken from '../getToken';

interface Ticket {
    [key: string]: any; // Dynamic interface to accommodate any field names
}


const TicketsOverview = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]); // State for tickets data
    const [fieldNames, setFieldNames] = useState<string[]>([]); // State for field names
    const { token } = useToken();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5020/api/Tickets', {
                    method: 'GET',
                    headers: {
                        'accept': 'text/plain',
                        'Authorization': `Bearer ${token}`
                      },
                    }
                );
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
        <div className="relative overflow-x-auto shadow-2xl rounded-3xl  pb-2 bg-midlightgray ">
            {tickets.length > 0 ? (
                <table className="w-full text-left rtl:text-right">
                    <thead className='bg-darkgray text-white'>
                        <tr className=''>
                            {fieldNames.map((fieldName) => (
                                <th key={fieldName} className="p-3 pt-4">
                                    {fieldName}
                                </th>
                            ))}
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <tr key={ticket.id} className="bg-midlightgray border-t  border-darkgray hover:bg-midgray">
                                {fieldNames.map((fieldName) => (
                                    <td key={fieldName} className=" p-2">
                                        {ticket[fieldName]}
                                    </td>
                                ))}
                                <td className="p-2">
                                    <Link
                                        className="font-medium text-blue-600 hover:underline"
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