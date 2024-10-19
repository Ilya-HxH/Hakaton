import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TicketsContext } from '../context/TicketsContext';

const TicketDetail = () => {
  const { id } = useParams(); // Получаем ID из URL
  const { tickets } = useContext(TicketsContext);

  // Найдем заявку по ID
  const ticket = tickets.find(ticket => ticket.id === parseInt(id));

  if (!ticket) {
    return <p>Ticket not found</p>;
  }


  if (!ticket.visible) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-red-100 p-6 shadow-lg rounded-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-4">This ticket has been rejected</h2>
          <p className="text-red-600 mb-4">Reason: {ticket.deleteReason}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">{ticket.title}</h2>
        <p className="text-gray-700 mb-6 text-center">{ticket.description}</p>
        <div className="text-gray-500 text-center mb-6">
          <p>Deadline: {ticket.deadline}</p>
        </div>
        <p className={`text-sm px-3 py-2 mb-4 inline-block rounded-full ${ticket.status === 'Pending' ? 'bg-yellow-500' : ticket.status === 'In Progress' ? 'bg-blue-500' : 'bg-green-500'} text-white`}>
          {ticket.status}
        </p>
      </div>
    </div>
  );
};

export default TicketDetail;
