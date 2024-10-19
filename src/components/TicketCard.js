import React from 'react';
import { Link } from 'react-router-dom';

const TicketCard = ({ ticket, updateStatus, deleteTicket }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-700">
        <Link to={`/ticket/${ticket.id}`} className="hover:underline">
          {ticket.title}
        </Link>
      </h3>
      <p className="text-gray-600">{ticket.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">Deadline: {ticket.deadline}</span>
        <span className={`px-2 py-1 rounded-full text-white ${ticket.status === 'Pending' ? 'bg-yellow-500' : ticket.status === 'In Progress' ? 'bg-blue-500' : 'bg-green-500'}`}>
          {ticket.status}
        </span>
      </div>

      {/* Кнопки для изменения статуса и удаления только для менеджера */}
      {updateStatus && deleteTicket && (
        <div className="mt-4 flex justify-between">
          <div>
            <button 
              onClick={() => updateStatus(ticket.id, 'In Progress')} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
            >
              Set In Progress
            </button>
            <button 
              onClick={() => updateStatus(ticket.id, 'Completed')} 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Complete
            </button>
          </div>

          <button 
            onClick={() => deleteTicket(ticket.id)} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketCard;
