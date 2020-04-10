import React from "react";

import { Container, Header, Body, Pagination } from "./styles";

export default function Table() {
  const data = [
    {
      id: "ads76d8as6d7a",
      img:
        "https://cdn3.volusion.com/7aztx.j6veq/v/vspfiles/photos/HT1903-2.jpg",
      description: "Esse cara é muito bom, vcs tem que ver",
      name: "Tony Stark",
    },
    {
      id: "ads76d8as6d7b",
      img:
        "https://cdn3.volusion.com/7aztx.j6veq/v/vspfiles/photos/HT1903-2.jpg",
      description: "Esse cara é muito bom, vcs tem que ver",
      name: "Tony Stark",
    },
  ];
  return (
    <Container>
      <Header>
        <div>Personagem</div>
        <div>Descrição</div>
      </Header>

      {data.map(item => (
        <Body key={item.id}>
          <div>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
          <div>
            <span>{item.description}</span>
          </div>
        </Body>
      ))}
      <Pagination pageCount={6} onPageChange={() => {}} />
    </Container>
  );
}
