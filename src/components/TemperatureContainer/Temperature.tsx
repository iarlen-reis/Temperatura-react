import React, { useContext } from "react";

import { MainContainer, ImageMain } from "./styles";

import WeatherImage from "/public/weather.png";

import HeaderTemperature from "../HeaderTemperature/HeaderTemperature";
import ContentTemperature from "../ContentTemperature/ContentTemperature";

import { FetchContext } from "../../contexts/fetchContext";

const Temperature = () => {
  const { error } = useContext(FetchContext);

  return (
    <MainContainer error={error}>
      <ImageMain src={WeatherImage} alt="imagem da nuvem" />
      <HeaderTemperature />
      <ContentTemperature />
    </MainContainer>
  );
};

export default Temperature;
