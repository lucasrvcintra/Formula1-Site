import React, { useState } from "react";
import Escalacao from "../components/escalacao";
import Navbar from "../components/navbar";
import CardFlip from "../components/cardFlip";
import cardsData from "../cardData";
import "../../index.css";
import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        className="navbar"
      />
      <div className="container">
        <div className="mt-4">
          {activeLink === "Teams" && <Escalacao />}

          {activeLink === "Tracks" && (
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              {cardsData.map((card) => (
                <CardFlip
                  key={card.id}
                  image={card.image}
                  trackInfo={card.trackInfo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
