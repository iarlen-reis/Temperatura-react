import React from "react";

import { MainContainer, ImageMain } from "./styles";

import WeatherImage from "/public/weather.png";

import HeaderTemperature from "../HeaderTemperature/HeaderTemperature";
import ContentTemperature from "../ContentTemperature/ContentTemperature";

const Temperature = () => {
  return (
    <MainContainer>
      <ImageMain src={WeatherImage} alt="imagem da nuvem" />
      <HeaderTemperature />
      <ContentTemperature />
    </MainContainer>
  );
};

export default Temperature;
