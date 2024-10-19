import React, { useState } from 'react';
import { useTicketsStore } from '../store/ticketsStore';
import TicketTable from '../components/TicketTable';

const ManagerPage = () => {
  const tickets = useTicketsStore((state) => state.tickets);
  const updateStatus = useTicketsStore((state) => state.updateStatus);
  const deleteTicket = useTicketsStore((state) => state.deleteTicket);

  const [selectedTickets, setSelectedTickets] = useState([]);

  // Массовое изменение статуса выбранных заявок
  const bulkUpdateStatus = (status) => {
    selectedTickets.forEach(id => updateStatus(id, status));
    setSelectedTickets([]); // Сброс выбора после изменения статуса
  };

  // Массовое отклонение выбранных заявок
  const bulkRejectTickets = () => {
    selectedTickets.forEach(id => deleteTicket(id, 'Rejected by manager'));
    setSelectedTickets([]); // Сброс выбора после удаления
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manager's Tickets</h1>
      
      {/* Таблица с чекбоксами */}
      <TicketTable 
        tickets={tickets} 
        selectedTickets={selectedTickets}
        setSelectedTickets={setSelectedTickets}
      />

      {/* Кнопки для массового изменения статусов */}
      <div className="mt-4 flex space-x-4">
        <button 
          onClick={() => bulkUpdateStatus('In Progress')} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Set In Progress
        </button>
        <button 
          onClick={() => bulkUpdateStatus('Completed')} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Set Completed
        </button>
        <button 
          onClick={bulkRejectTickets} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reject Selected
        </button>
      </div>
    </div>
  );
};

export default ManagerPage;
