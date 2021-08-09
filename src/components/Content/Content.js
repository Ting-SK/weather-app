import React from "react";
import { ChangeCity } from "../../containers/ChangeCity";
import { Weather } from "../../containers/Weather";
import { ContentWrapper } from "../../lib/Styled/Styled";

export const Content = () => {
  return (
    <ContentWrapper>
      <ChangeCity />
      <Weather />
    </ContentWrapper>
  );
};
