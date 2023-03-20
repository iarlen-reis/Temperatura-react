import React from "react";

import {
  MainContainer,
  ImageMain,
  HeaderContainer,
  ContentContainer,
  TemperatureContainer,
  TemperatureDayContainer,
  InfoDayContainer,
} from "./styles";

import { TemperatureProps } from "../../types/temperature";

import WeatherImage from "/public/weather.png";
import PinImage from "/public/point.png";
import WindImage from "/public/wind.png";
import RainyImage from "/public/rainy.png";
import CloudRainImage from "/public/cloudRain.png";

const Temperature = (props: TemperatureProps) => {
  return (
    <MainContainer error={props.error}>
      <ImageMain src={WeatherImage} alt="imagem da nuvem" />
      <HeaderContainer>
        <p>
          <img src={PinImage} alt="" />
          {`${props.location.name},
          ${props.location.region && props.location.region + ", "}
          ${props.location.country}`}
        </p>
      </HeaderContainer>
      <ContentContainer>
        <TemperatureContainer>
          <h1>
            {Math.round(props.current.temp_c)} <span>ºC</span>
          </h1>
          <TemperatureDayContainer>
            <span>
              {Math.round(props.forecast.forecastday[0].day.maxtemp_c)}º
            </span>
            <span>
              {Math.round(props.forecast.forecastday[0].day.mintemp_c)}º
            </span>
          </TemperatureDayContainer>
        </TemperatureContainer>

        <InfoDayContainer>
          <ul>
            <li>
              <img src={WindImage} alt="imagem do vento" />
              <div>
                <p>Vento</p>
                <p>{Math.round(props.current.wind_kph)}km/h</p>
              </div>
            </li>
            <li>
              <img src={RainyImage} alt="imagem da umidade" />
              <div>
                <p>Umidade</p>
                <p>{Math.round(props.current.humidity)}%</p>
              </div>
            </li>
            <li>
              <img src={CloudRainImage} alt="imagem de chuva" />
              <div>
                <p>Nuvem</p>
                <p>{props.current.cloud}%</p>
              </div>
            </li>
          </ul>
        </InfoDayContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Temperature;
