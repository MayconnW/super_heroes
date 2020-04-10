import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Container, Content } from "./style";

export default function Connected({ children }) {
  return (
    <Wrapper>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

Connected.propTypes = {
  children: PropTypes.element.isRequired,
};
