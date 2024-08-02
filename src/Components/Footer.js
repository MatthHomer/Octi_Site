import React from "react";
import Logo from "../Assets/Logo.svg";
import { AiFillInstagram  } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <SiLinkedin href="https://www.linkedin.com/company/67562294" />
          <BsYoutube href="https://www.youtube.com/channel/UCNKNgoJEPg_rEc5-yYgnnAA" />
          <AiFillInstagram  href="https://www.instagram.com/octi_app/"/>
          <FaFacebookF href="https://www.facebook.com/profile.php?id=61563766671712"/>
        </div>
      </div>
      <div className="footer-section-two">
{/*         <div className="footer-section-columns">
          <span>Ajuda</span>
          <span>Compartilhe</span>
          <span>Testemunhos</span>
        </div> */}
        <div className="footer-section-columns">
          <span>(51) 9 9630-1302</span>
          <span>comercial@quidittas.com.br</span>
          <span>suporte@quidittas.com.br</span>
          <span>duvidas@quidittas.com.br</span>
        </div>
{/*         <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Política de Privacidade</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
