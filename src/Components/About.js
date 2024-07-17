import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Este aplicativo organiza todo mundo
        </h1>
        <p className="primary-text">
          Com ele, fica fácil do prestador de serviços se organizar e
          a pessoa que irá contratar que poderá agendar o serviço com 
          maior organização
        </p>
        <p className="primary-text">
          Temos inúmeros benefícios dentro do app
          venha tirar sua dúvida sobre como ele funciona.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assista ao vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
