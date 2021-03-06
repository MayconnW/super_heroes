import React from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import history from "services/history";

import { requestData } from "../store/actions";

import Loading from "./Loading";
import { Container, Header, Body, Pagination } from "./styles";

export default function Table() {
  const dispatch = useDispatch();
  const { data, pagination, loading } = useSelector(({ home }) => home);
  const { isMobile } = useSelector(({ resolution }) => resolution);

  const handleSelectPage = page => {
    dispatch(requestData(page));
  };

  const handleTableClick = id => {
    history.push(`/character/${id}`);
  };

  return (
    <Container>
      <Header>
        <div>{isMobile ? "Nome" : "Personagem"}</div>
        <div>Descrição</div>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map(item => (
            <Body
              key={`character-${item.id}`}
              onClick={() => handleTableClick(item.id)}
            >
              <div>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
              <div>
                <span>{parse(item.description)}</span>
              </div>
            </Body>
          ))}
        </>
      )}
      <Pagination
        pageCount={pagination.pages}
        onPageChange={({ selected }) => handleSelectPage(selected + 1)}
      />
    </Container>
  );
}
