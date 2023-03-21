import React from "react";

import { MainContainer, ImageMain } from "./styles";

import WeatherImage from "/public/weather.png";

import { IProps } from "../../types/temperature";

import HeaderTemperature from "../HeaderTemperature/HeaderTemperature";
import ContentTemperature from "../ContentTemperature/ContentTemperature";

const Temperature = (props: IProps) => {
  return (
    <MainContainer>
      <ImageMain src={WeatherImage} alt="imagem da nuvem" />
      <HeaderTemperature />
      <ContentTemperature />
    </MainContainer>
  );
};

export default Temperature;
