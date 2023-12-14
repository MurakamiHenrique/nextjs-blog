// components/Navbar.js
import React from "react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-link" >Placa Mãe</div>
        <div className="separator">|</div>
        <div className="nav-link">Processador</div>
        <div className="separator">|</div>
        <div className="nav-link">Memória</div>
        <div className="separator">|</div>
        <div className="nav-link">HD</div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");

        nav {
          width: 70%;
          margin: 0 auto;
          padding: 10px 0;
          background-color: transparent; /* Fundo transparente */
        }

        .navbar-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .nav-link {
          font-size: 20px;
          flex-grow: 1;
          text-align: center;
          font-family: "Nunito", sans-serif; /* Aplica a fonte Nunito */
          color: #333; /* cor do texto */
          cursor: pointer;
        }
        .nav-link:hover {
          color: #4a369a;
        }
        .separator {
          font-size: 16px;
          color: #333; /* cor do texto */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
