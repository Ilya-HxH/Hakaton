import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">CRM</div>
        <div>
          <Link to="/user" className="text-white px-4 hover:underline">User</Link>
          <Link to="/manager" className="text-white px-4 hover:underline">Manager</Link>
          <Link to="/admin" className="text-white px-4 hover:underline">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
