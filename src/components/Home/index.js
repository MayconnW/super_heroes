import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { requestData } from "./store/actions";

import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import Footer from "./Footer";
import { Container } from "./styles";

export default function Home() {
  const dispatch = useDispatch();
  // const { offset } = useSelector(({ home }) => home);

  useEffect(() => {
    dispatch(requestData(1));
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Search />
      <Table />
      <Footer />
    </Container>
  );
}
