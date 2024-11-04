import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isOpen ? "w-64" : "w-16"
      } bg-darkgreen text-white transition-all duration-300`}
    >
      <button
        className={`absolute top-4 ${
          isOpen ? "right-[-12px]" : "right-[-12px]"
        } text-white bg-gray-800 p-2 rounded-full`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {isOpen && (
        <ul className="mt-10">
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">Home</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">Data</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">
            Review
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">
            Options
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">Demo</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">Stats</li>
          <li className="py-2 px-4 hover:bg-gray-700 text-whitegreen">
            Settings
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
