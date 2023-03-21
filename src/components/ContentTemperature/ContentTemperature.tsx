import React from "react";

import { ContentContainer } from "./styles";

import TemperatureActual from "../TemperatureActual/TemperatureActual";
import TemperatureDay from "../TemperatureDay/TemperatureDay";

const ContentTemperature = () => {
  return (
    <ContentContainer>
      <TemperatureActual />
      <TemperatureDay />
    </ContentContainer>
  );
};

export default ContentTemperature;
