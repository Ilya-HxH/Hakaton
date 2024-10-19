import React, { useContext } from 'react';
import { TicketsContext } from '../context/TicketsContext';
import TicketTable from '../components/TicketTable';

const UserPage = () => {
  const { tickets, closeNotification } = useContext(TicketsContext);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map(ticket => 
          ticket.visible ? (
            <TicketTable key={ticket.id} ticket={ticket} />
          ) : (
            <div key={ticket.id} className="border border-red-300 bg-red-100 p-4 rounded-lg">
              <p className="text-red-700">Your ticket "{ticket.title}" was rejected: {ticket.deleteReason}</p>
              <button 
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => closeNotification(ticket.id)}
              >
                Close
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserPage;
