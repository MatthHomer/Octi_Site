import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Defina como buscar o profissional",
      text: "Temos várias maneiras de localizar o melhor profissional (locadidade, categoria, avaliação média e etc...)",
    },
    {
      image: ChooseMeals,
      title: "Agende dia e horário",
      text: "Com o profissional em mãos, selecione o melhor dia e horário para a visita.",
    },
    {
      image: DeliveryMeals,
      title: "Converse com o profissional",
      text: "Liberamos a conversa pelo Whatsapp para você detalhar melhor os serviços",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamento</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
          Em poucos toques, a pessoa interessada nos serviços da categoria seleciona, 
          poderá agendar uma visita na sua casa, conversar com o profissional para detalhar
          o trabalho e após tudo, ainda poderá avaliar e também favoritar os melhores prestadores. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="info-boxes-img" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
