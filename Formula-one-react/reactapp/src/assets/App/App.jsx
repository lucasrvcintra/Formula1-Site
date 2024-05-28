import React, { useState } from "react";
import Escalacao from "../components/escalacao";
import Navbar from "../components/navbar";
import Races from "../components/races";
import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="container">
      <Navbar activeLink={activeLink} onLinkClick={handleLinkClick}></Navbar>

      {activeLink === "Teams" && <Escalacao></Escalacao>}
    </div>
  );
}

export default App;
