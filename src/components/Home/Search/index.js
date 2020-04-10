import React from "react";

import { Container } from "./styles";

export default function Search() {
  return (
    <Container>
      <label htmlFor="name">
        Nome do Personagem
        <input type="text" />
      </label>
    </Container>
  );
}
