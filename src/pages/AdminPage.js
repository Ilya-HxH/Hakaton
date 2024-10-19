import React, { useContext } from 'react';
import { TicketsContext } from '../context/TicketsContext';
import TicketTable from '../components/TicketTable';

const AdminPage = () => {
  const { tickets } = useContext(TicketsContext);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin's Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map(ticket => (
          <TicketTable key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
