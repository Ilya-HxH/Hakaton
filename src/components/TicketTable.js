import React, { useState } from 'react';

const TicketTable = ({ tickets, selectedTickets, setSelectedTickets }) => {

  // Функция для обработки изменения чекбокса для каждого тикета
  const handleCheckboxChange = (id) => {
    if (selectedTickets.includes(id)) {
      setSelectedTickets(selectedTickets.filter(ticketId => ticketId !== id));
    } else {
      setSelectedTickets([...selectedTickets, id]);
    }
  };

  // Функция для обработки изменения чекбокса "Выбрать все"
  const handleSelectAll = () => {
    if (selectedTickets.length === tickets.length) {
      setSelectedTickets([]); // Убираем все выбранные
    } else {
      setSelectedTickets(tickets.map(ticket => ticket.id)); // Выбираем все
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">
              <input 
                type="checkbox" 
                checked={selectedTickets.length === tickets.length}
                onChange={handleSelectAll}
              />
            </th>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Deadline</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td className="py-2 px-4 border-b text-center">
                <input 
                  type="checkbox" 
                  checked={selectedTickets.includes(ticket.id)}
                  onChange={() => handleCheckboxChange(ticket.id)}
                />
              </td>
              <td className="py-2 px-4 border-b text-center">{ticket.id}</td>
              <td className="py-2 px-4 border-b">
                <a href={`/ticket/${ticket.id}`} className="text-blue-600 hover:underline">
                  {ticket.title}
                </a>
              </td>
              <td className="py-2 px-4 border-b">{ticket.description}</td>
              <td className="py-2 px-4 border-b">{ticket.deadline}</td>
              <td className="py-2 px-4 border-b text-center">
                <span className={`px-2 py-1 rounded-full text-white ${ticket.status === 'Pending' ? 'bg-yellow-500' : ticket.status === 'In Progress' ? 'bg-blue-500' : 'bg-green-500'}`}>
                  {ticket.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
