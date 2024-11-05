import React from "react";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
// import ChartCard from "./components/ChartCard";

const cards = [<Card key="1" />];

const App = () => {
  return (
    <div className="flex min-h-screen bg-slate-300">
      <SideBar />

      <div className="flex-1 p-6">
        {/* Hauptinhalt hier */}
        {cards}
      </div>
    </div>
  );
};

export default App;
