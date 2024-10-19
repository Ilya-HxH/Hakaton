import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import ManagerPage from './pages/ManagerPage';
import AdminPage from './pages/AdminPage';
import TicketDetail from './pages/TicketDetail';
import Navbar from './components/Navbar';
import { TicketsProvider } from './context/TicketsContext';

function App() {
  // Здесь предположим, что мы передаем роль пользователя, например, через состояние или пропсы
  const isManager = true; // Пример для менеджера (может быть false для пользователя)

  return (
    <TicketsProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/user" element={<UserPage />} />
              <Route path="/manager" element={<ManagerPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/ticket/:id" element={<TicketDetail isManager={isManager} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TicketsProvider>
  );
}

export default App;
