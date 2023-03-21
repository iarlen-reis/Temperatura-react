import React, { useContext } from "react";

import { HeaderContainer } from "./styles";

import { FetchContext } from "../../contexts/fetchContext";

import PinImage from "/public/point.png";

const HeaderTemperature = () => {
  const { data } = useContext(FetchContext);

  return (
    <HeaderContainer>
      <p>
        <img src={PinImage} alt="" />
        {`${data.location.name},
      ${data.location.region && data.location.region + ", "}
      ${data.location.country}`}
      </p>
    </HeaderContainer>
  );
};

export default HeaderTemperature;
