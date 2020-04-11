import React from "react";

import ReactLoading from "react-loading";

import { SingleLineWrapper } from "./styles";

export default function Loading() {
  return (
    <SingleLineWrapper>
      <ReactLoading type="bars" color="#dd0022" height={24} width={24} />
      carregando...
    </SingleLineWrapper>
  );
}
