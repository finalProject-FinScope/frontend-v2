// App.jsx
import React, { useState } from "react";
import SideBar from "./components/SideBar";
import BaseCard from "./components/BaseCard";
import ChartCard from "./components/ChartCard";

const App = () => {
  const [isOpen, setIsOpen] = useState(true); // State hier verwalten

  return (
    <div className="flex min-h-screen bg-slate-300">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isOpen ? "ml-40" : "ml-16"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ChartCard />
          <BaseCard>Transaktionen</BaseCard>
        </div>
      </main>
    </div>
  );
};

export default App;
