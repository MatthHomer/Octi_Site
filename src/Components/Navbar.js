/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a style={{ paddingLeft: "10px" }} href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Feedback</a>
        <a href="">Contato</a>
        <button className="primary-button">Baixe Agora</button>
      </div>
    </nav>
  );
};

export default Navbar;
