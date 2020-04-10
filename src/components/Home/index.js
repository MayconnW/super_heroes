import React from "react";

import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import Footer from "./Footer";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <Search />
      <Table />
      <Footer />
    </Container>
  );
}
