import React from "react";
import ProfilePic from "../Assets/Perfil_Matheus.png";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillChrome,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Profissional de Serviços?</p>
        <h1 className="primary-heading">Cadastre-se Conosco</h1>
        <p className="primary-text">
          Nascemos para ajudar ambos entregando qualidade, eficiencia e
          tecnologia aos seus clientes, e também automatizando a sua rotina para
          ter mais tempo e produtividade.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <div className="profile-icon">
          <img src={ProfilePic} alt="" className="profile-pic" />
        </div>
        <p>
          Garanto que iremos lhe ajudar a alcançar mais pessoas de forma
          acessível e efetiva, sempre presando qualidade e agilidade para ambos
          em todos os locais.
        </p>
        <div className="testimonials-stars-container">
          <AiFillAndroid />
          <AiFillApple />
          <AiFillChrome />
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
        <h2>Matheus S.</h2>
        <h3>CEO e Founder</h3>
      </div>
    </div>
  );
};

export default Testimonial;
