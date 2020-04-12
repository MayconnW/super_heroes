import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Media from "./Media";
import {
  Container,
  Header,
  MiniCard,
  Card,
  Content,
  Details,
  BackIcon,
  TabList,
  TabPanel,
} from "./styles";

export default function Character({ data }) {
  return (
    <Container>
      <Header>
        <BackIcon />
      </Header>
      <Content>
        <Card>
          <img src={data.img} alt={data.name} />
          <MiniCard>
            <img src={data.img} alt={data.name} />
            <span>{data.name}</span>
          </MiniCard>
        </Card>
        <Details>
          <Tabs>
            <TabList>
              <Tab>Detalhes</Tab>
              <Tab>Participações</Tab>
            </TabList>

            <TabPanel>
              <h3>{data.name}</h3>
              <span>{data.description}</span>
            </TabPanel>
            <TabPanel>
              <Media media={data.media} />
            </TabPanel>
          </Tabs>
        </Details>
      </Content>
    </Container>
  );
}

Character.defaultProps = {
  data: {
    img: "",
    description: "",
    name: "",
    media: [],
  },
};

Character.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        ranking: PropTypes.number,
        favorites: PropTypes.number,
        views: PropTypes.number,
        averageRating: PropTypes.number,
      })
    ),
  }),
};
