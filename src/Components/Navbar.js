/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Início",
      icon: <HomeIcon />,
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
    },
    {
      text: "Feedback",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contate-nos",
      icon: <PhoneRoundedIcon />,
    },
/*     {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    }, */
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Feedback</a>
        <a href="">Contato</a>
{/*         <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        <button className="primary-button">Baixe Agora</button>
      </div>
    </nav>
  );
};

export default Navbar;
