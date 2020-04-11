import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../store/actions";
import { Container } from "./styles";

export default function Search() {
  const dispatch = useDispatch();
  const { filter } = useSelector(({ home }) => home);

  return (
    <Container>
      <label htmlFor="name">
        Nome do Personagem
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </Container>
  );
}
