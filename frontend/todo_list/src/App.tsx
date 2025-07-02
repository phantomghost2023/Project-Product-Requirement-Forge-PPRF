import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to PPRF Frontend!</h1>
        <p className="text-lg text-gray-700">
          This is a React application with Tailwind CSS configured.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
