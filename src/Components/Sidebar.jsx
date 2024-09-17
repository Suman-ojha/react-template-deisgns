import React from 'react';
import { Home, Dashboard, AccountCircle, TableChart } from '@mui/icons-material';

export default function Sidebar () {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="text-2xl font-bold text-center p-6">
        Horizon Free
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li className="text-gray-600 hover:bg-purple-100 hover:text-purple-500">
            <a href="#" className="flex items-center p-4">
              <Dashboard className="mr-4" /> Dashboard
            </a>
          </li>
          <li className="text-gray-600 hover:bg-purple-100 hover:text-purple-500">
            <a href="#" className="flex items-center p-4">
              <TableChart className="mr-4" /> Tables
            </a>
          </li>
          <li className="text-gray-600 hover:bg-purple-100 hover:text-purple-500">
            <a href="#" className="flex items-center p-4">
              <AccountCircle className="mr-4" /> Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};


