import { useEffect, useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import useToken from "../getToken";


interface DataFieldProps {
    name: string;
    value: string;
}

const DataField: FC<DataFieldProps> = (props) => {
    return (
        <div
            className={`m-2 flex items-center font-primary  rounded-xl text-sm pl-4 pr-2 py-2 shadow-xl bg-lightgray border-black border-opacity-60 bg-opacity-25 border-[1px]`}
        >
            <div className={` mr-3 text-nowrap `}>{props.name}:</div>
            <p className="rounded-md px-2 py-px w-full bg-white text-wrap">
                {props.value}
            </p>
        </div>
    );
}

const Spacer = () => {
    return (
        <div className='my-5 mx-2 p-[1px] bg-opacity-60 bg-black'> </div>
    );
}

interface Ticket {
    // eslint-disable-next-line
    [key: string]: any; // Dynamic interface to accommodate any field names
}

const TicketPage = () => {
    let { ticketId } = useParams();
    const { token } = useToken();
    const [ticket, setTicket] = useState<Ticket>();
    const [img, setImg] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5020/api/Tickets/${ticketId}`, {
                    method: "GET",
                    headers: {
                        accept: "text/plain",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error fetching ticket ${ticketId}: ${response.statusText}`);
                }
                const data = await response.json();
                setTicket(data);
            } catch (error) {
                console.error("Error fetching ticket:", error);
            }

            try {
                const response = await fetch(`http://localhost:5020/api/Tickets/Image/${ticketId}`, {
                    method: "GET",
                    headers: {
                        accept: "*/*",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error fetching ticket ${ticketId}: ${response.statusText}`);
                }

                const imageBlob = await response.blob();
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImg(imageObjectURL)
            } catch (error) {
                console.error("Error fetching img:", error)
            }
        }
        fetchData();
    }, []);

    //Ticket ID:  {ticketId} {JSON.stringify(ticket)}

    return (
        <div>



            {ticket ? (
                <div className='bg-midlightgray shadow-2xl p-14 rounded-3xl mx-10 my-10'>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <img src={img} alt="loding" className='' />

                        <div>
                            <DataField name="Ticket ID" value={ticket.id} />
                            <DataField name="Category" value={ticket.category} />
                            <DataField name="Description" value={ticket.description} />

                            <Spacer />

                            <DataField name="Straße" value={ticket.street_name} />
                            <div className='grid md:grid-cols-2 grid-cols-1 '>
                                <DataField name="Ort" value={ticket.city} />
                                <DataField name="Post Leitzahl" value={ticket.postal_code} />
                            </div>

                            <Spacer />

                            <DataField name="Name Vorname" value={ticket.forename + " " + ticket.surname } />
                            <DataField name="Email" value={ticket.email} />
                            <DataField name="Telefon" value={ticket.phone_Number} />


                        </div>
                    </div>

                    <div className='mt-14 flex justify-center '>
                        <button className='bg-darkgray text-white text-center py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 transform scale-100'>
                        Ticket abschlißen
                        </button>
                    </div>

                    
                </div>

            ) : (
                <p className="text-center text-gray-500">Ticket not found.</p>
            )}
        </div>
    )
}

export default TicketPage

