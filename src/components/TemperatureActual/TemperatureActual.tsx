import React, { useContext } from "react";

import { TemperatureContainer, TemperatureDayContainer } from "./styles";

import { FetchContext } from "../../contexts/fetchContext";

const TemperatureActual = () => {
  const { data } = useContext(FetchContext);

  return (
    <TemperatureContainer>
      <h1>
        {Math.round(data.current.temp_c)} <span>ºC</span>
      </h1>
      <TemperatureDayContainer>
        <span>{Math.round(data.forecast.forecastday[0].day.maxtemp_c)}º</span>
        <span>{Math.round(data.forecast.forecastday[0].day.mintemp_c)}º</span>
      </TemperatureDayContainer>
    </TemperatureContainer>
  );
};

export default TemperatureActual;
