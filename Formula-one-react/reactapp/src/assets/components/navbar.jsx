import React from "react";
import "./navbar.css";

function Navbar({ activeLink, onLinkClick }) {
  return (
    <nav className="navbar navbar-expand-lg w-full">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/240px-F1.svg.png?20210221014215"
            alt="F1 logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Define os links da barra de navegação e adiciona a classe 'active' ao link ativo */}
            <a
              className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
              onClick={() => onLinkClick("Home")}
              href="#"
            >
              Home
            </a>
            <a
              className={`nav-link ${activeLink === "Teams" ? "active" : ""}`}
              onClick={() => onLinkClick("Teams")}
              href="#"
            >
              Teams
            </a>
            <a
              className={`nav-link ${activeLink === "Tracks" ? "active" : ""}`}
              onClick={() => onLinkClick("Tracks")}
              href="#"
            >
              Tracks
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
