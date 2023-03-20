import React, { useState } from "react";

import { HomeStyled, HomeContainerStyled, FormStyled } from "./styles";

import Temperature from "../../components/TemperatureContainer/Temperature";

import { TemperatureMocks } from "../../mocks/Temperature";

import { TemperatureProps } from "../../types/temperature";

import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<TemperatureProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const randleSubmit = (event: any) => {
    event.preventDefault();

    setError(false);

    if (!search) return;

    setLoading(true);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_KEY
        }&q=${search}&days=1&aqi=no&alerts=no`,
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //wind_kph = vento

  return (
    <HomeStyled>
      <HomeContainerStyled>
        <FormStyled>
          <input
            type="text"
            placeholder="Digite um Páis, Estado, Cidade ou Bairro"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          {loading ? (
            <button disabled type="submit" onClick={randleSubmit}>
              loading...
            </button>
          ) : (
            <button type="submit" onClick={randleSubmit}>
              Procurar
            </button>
          )}
        </FormStyled>
        <Temperature
          error={error}
          location={data?.location ? data?.location : TemperatureMocks.location}
          current={data?.current ? data?.current : TemperatureMocks.current}
          forecast={data?.forecast ? data?.forecast : TemperatureMocks.forecast}
        />
      </HomeContainerStyled>
    </HomeStyled>
  );
};

export default Home;
