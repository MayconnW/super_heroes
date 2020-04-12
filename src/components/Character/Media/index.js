import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Container,
  LeftArrow,
  RightArrow,
  Content,
  Badges,
  Description,
} from "./styles";

export default function Media({ media }) {
  const [selectedMedia, setSelectedMedia] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (selectedIndex === -1) return;

    setSelectedMedia(media[selectedIndex]);
  }, [selectedIndex, media]);

  useEffect(() => {
    if (selectedIndex >= 0 || media.length === 0) return;
    setSelectedIndex(0);
  }, [media, selectedIndex]);

  const handleLeftClick = () => {
    if (selectedIndex <= 0) return;
    setSelectedIndex(selectedIndex - 1);
  };

  const handleRightClick = () => {
    if (selectedIndex >= media.length - 1) return;
    setSelectedIndex(selectedIndex + 1);
  };

  return (
    <Container>
      <LeftArrow onClick={handleLeftClick} />
      <Content>
        <h3>{selectedMedia.title}</h3>
        <img src={selectedMedia.img} alt="" />
        <Badges>Ranking favoritado Usuarios</Badges>
        <Description>{selectedMedia.description}</Description>
      </Content>
      <RightArrow onClick={handleRightClick} />
    </Container>
  );
}

Media.defaultProps = {
  media: [],
};

Media.propTypes = {
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
};
