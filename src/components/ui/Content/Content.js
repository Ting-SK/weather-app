import React from "react";
import { ChangeCity } from "../../ChangeCity";
import { Weather } from "../../Weather";
import { ContentWrapper } from "./styles";

export const Content = () => {
  return (
    <ContentWrapper>
      <ChangeCity />
      <Weather />
    </ContentWrapper>
  );
};
