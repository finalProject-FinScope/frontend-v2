// Sidebar.jsx
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  // Props hinzufügen
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-[5%] h-[90%] ${
        isOpen ? "w-40" : "w-16"
      } bg-whitegreen text-white shadow-md rounded-lg transition-all duration-300`}
    >
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-[-12px] text-white bg-emerald-400 p-2 rounded-full"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {isOpen && (
        <ul className="flex flex-col justify-center items-center space-y-4 mt-[100%]">
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Home</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Data</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Review</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Options</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Demo</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Stats</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-black">Settings</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
