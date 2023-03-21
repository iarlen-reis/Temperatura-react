import React, { useState, useContext, FormEvent } from "react";

import { HomeStyled, HomeContainerStyled, FormStyled } from "./styles";

import { FetchContext } from "../../contexts/fetchContext";

import Temperature from "../../components/TemperatureContainer/Temperature";

const Home = () => {
  const [search, setSearch] = useState("");

  const { fetchData } = useContext(FetchContext);

  const randleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!search) return;

    fetchData(search);
  };

  return (
    <HomeStyled>
      <HomeContainerStyled>
        <FormStyled onSubmit={randleSubmit}>
          <input
            type="text"
            placeholder="Digite um Páis, Estado, Cidade ou Bairro"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <button type="submit">Procurar</button>
        </FormStyled>
        <Temperature />
      </HomeContainerStyled>
    </HomeStyled>
  );
};

export default Home;
