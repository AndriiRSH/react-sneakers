import React from "react";
import AppContext from "../context";

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex flex-column justify-center align-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Пуста картка"></img>
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow"></img>
        Повернутись назад
      </button>
    </div>
  );
};

export default Info;
