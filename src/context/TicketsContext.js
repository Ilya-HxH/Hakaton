import React, { createContext, useState } from 'react';

export const TicketsContext = createContext();

export const TicketsProvider = ({ children }) => {
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Issue 1', status: 'Pending', description: 'Details of issue 1Details of issue 1Details of issue 1 Details of issue 1Details of issue 1Details of issue 1', deadline: '2024-10-25', visible: true },
    { id: 2, title: 'Issue 2', status: 'In Progress', description: 'Details of issue 2', deadline: '2024-10-26', visible: true },
    { id: 3, title: 'Issue 3', status: 'Completed', description: 'Details of issue 3', deadline: '2024-10-30', visible: true }
  ]);


  const updateStatus = (id, status) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => ticket.id === id ? { ...ticket, status } : ticket)
    );
  };


  const deleteTicket = (id, reason) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => ticket.id === id ? { ...ticket, visible: false, deleteReason: reason } : ticket)
    );
  };


  const closeNotification = (id) => {
    setTickets(prevTickets =>
      prevTickets.filter(ticket => ticket.id !== id)
    );
  };

  return (
    <TicketsContext.Provider value={{ tickets, updateStatus, deleteTicket, closeNotification }}>
      {children}
    </TicketsContext.Provider>
  );
};
