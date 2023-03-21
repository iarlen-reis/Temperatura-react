import React, { useContext } from "react";

import { InfoDayContainer } from "./styles";

import WindImage from "/public/wind.png";
import RainyImage from "/public/rainy.png";
import CloudRainImage from "/public/cloudRain.png";

import { FetchContext } from "../../contexts/fetchContext";

const TemperatureDay = () => {
  const { data } = useContext(FetchContext);

  return (
    <InfoDayContainer>
      <ul>
        <li>
          <img src={WindImage} alt="imagem do vento" />
          <div>
            <p>Vento</p>
            <p>{Math.round(data.current.wind_kph)}km/h</p>
          </div>
        </li>
        <li>
          <img src={RainyImage} alt="imagem da umidade" />
          <div>
            <p>Umidade</p>
            <p>{Math.round(data.current.humidity)}%</p>
          </div>
        </li>
        <li>
          <img src={CloudRainImage} alt="imagem de chuva" />
          <div>
            <p>Nuvem</p>
            <p>{data.current.cloud}%</p>
          </div>
        </li>
      </ul>
    </InfoDayContainer>
  );
};

export default TemperatureDay;
