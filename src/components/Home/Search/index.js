import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilter, requestData } from "../store/actions";
import { Container } from "./styles";

export default function Search() {
  const dispatch = useDispatch();
  const { filter } = useSelector(({ home }) => home);

  const timeout = useRef({ current: 0 });

  useEffect(() => {
    function filterData() {
      dispatch(requestData(1));
    }

    timeout.current = setTimeout(() => {
      filterData();
    }, 500);

    return () => clearTimeout(timeout.current);
  }, [filter]);

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
