import React, { useContext } from 'react';
import { TicketsContext } from '../context/TicketsContext';
import TicketCard from '../components/TicketCard';

const ManagerPage = () => {
  const { tickets, updateStatus, deleteTicket } = useContext(TicketsContext);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manager's Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.filter(ticket => ticket.visible).map(ticket => (
          <TicketCard 
            key={ticket.id} 
            ticket={ticket} 
            updateStatus={updateStatus} 
            deleteTicket={(id) => deleteTicket(id, 'Your ticket was rejected by the manager.')}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagerPage;
