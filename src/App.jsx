import React from "react";
import SideBar from "./components/SideBar";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";
import Card8 from "./components/Card8";
import Card9 from "./components/Card9";
import Card10 from "./components/Card10";
import Card11 from "./components/Card11";

const cards = [
  <Card1 key="1" />,
  <Card2 key="2" />,
  <Card3 key="3" />,
  /*  <Card4 key="4" />,
  <Card5 key="5" />,
  <Card6 key="6" />,
  <Card7 key="7" />,
  <Card8 key="8" />,
  <Card9 key="9" />,
  <Card10 key="10" />,
  <Card11 key="11" />, */
];

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
