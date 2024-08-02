import React, { useState, useEffect } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import BannerImageMobile from "../Assets/Logo.svg"; // Adicione sua imagem mobile aqui
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import AppStoreIcon from "../Assets/app_store_icon.png";
import PlayStoreIcon from "../Assets/play_store_icon.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

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
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seu aplicativo favorito de serviços
          </h1>
          <p className="primary-text">
            Tudo que você precisa para{" "}
            <p>melhorar o seu lar à alguns toques.</p>
          </p>
          <div className="download-buttons-container">
            <button className="secondary-button">
              Baixe agora {/* <FiArrowRight /> */}
            </button>
            <div className="store-icons-container">
              <img src={PlayStoreIcon} className="store-icon" alt="Google Play Store" />
              <img src={AppStoreIcon} className="store-icon" alt="App Store" />
            </div>
          </div>
        </div>
        <div className="home-image-section">
          <img src={isMobile ? BannerImageMobile : BannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
