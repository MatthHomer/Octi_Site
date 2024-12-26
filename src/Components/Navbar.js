/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <Link style={{ paddingLeft: "10px" }} to="/">Início</Link>
        <Link to="/#about">Sobre</Link>
        <Link to="/#work">Como Funciona</Link>
        <Link to="/#testimonial">Feedback</Link>
        <button className="primary-button">Baixe Agora</button>
      </div>
    </nav>
  );
};

export default Navbar;
