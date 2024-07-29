import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha a categoria necessária",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
    },
    {
      image: ChooseMeals,
      title: "Agenda dia e horário",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
    },
    {
      image: DeliveryMeals,
      title: "Converse com o profissional",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamento</p>
        <h1 className="primary-heading">Como irá funcionar</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
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
