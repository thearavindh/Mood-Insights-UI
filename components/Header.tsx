import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
  
      <div className="flex items-center">
        <img src="/image.png" alt="Logo" className="h-8 mr-4" />
      </div>

      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-3/5">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none w-full"
        />
        <FaSearch className="h-4 w-4 ml-2 text-gray-300" />
      </div>

      <button className="p-2 ml-2 rounded-full bg-gray-200">
        <FaBell className="h-5 w-5 text-gray-400" />
      </button>
    </header>
  );
};

export default Header;
