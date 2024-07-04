import React from 'react';
import { Link } from 'react-router-dom';

function UpperBar() {
  return (
    <div className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">My App</h1>
      <div>
        <Link to="/upload">
          <button className="bg-white text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-100">
            Upload
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-white text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-100">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpperBar;
