import React, { useState, useEffect } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import AboutBackgroundImageBlue from "../Assets/about-background-image-blue.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={isMobile ? AboutBackgroundImageBlue : AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Nosso app ajuda a organizar tudo
        </h1>
        <p className="primary-text">
          Buscamos ajudar as pessoas a encontrarem
          prestadores de serviços qualificados e ajudar
          os prestadores com ferramentas exclusivas. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba Mais</button>
{/*           <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assista ao vídeo
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
