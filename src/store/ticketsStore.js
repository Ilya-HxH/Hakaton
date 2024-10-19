import { create } from 'zustand'; // Именованный импорт create

// Создаем Zustand хранилище
export const useTicketsStore = create((set) => ({
  tickets: [
    { id: 1, title: 'Issue 1', status: 'Pending', description: 'Details of issue 1', deadline: '2024-10-25', visible: true },
    { id: 2, title: 'Issue 2', status: 'In Progress', description: 'Details of issue 2', deadline: '2024-10-26', visible: true },
    { id: 3, title: 'Issue 3', status: 'Completed', description: 'Details of issue 3', deadline: '2024-10-30', visible: true },
  ],

  // Функция для обновления статуса заявки
  updateStatus: (id, status) => set((state) => ({
    tickets: state.tickets.map(ticket =>
      ticket.id === id ? { ...ticket, status } : ticket
    ),
  })),

  // Функция для удаления заявки
  deleteTicket: (id, reason) => set((state) => ({
    tickets: state.tickets.map(ticket =>
      ticket.id === id ? { ...ticket, visible: false, deleteReason: reason } : ticket
    ),
  })),

  // Функция для закрытия уведомления
  closeNotification: (id) => set((state) => ({
    tickets: state.tickets.filter(ticket => ticket.id !== id),
  })),
}));
