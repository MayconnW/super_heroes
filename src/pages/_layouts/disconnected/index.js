import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./style";

export default function Disconnected({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Disconnected.propTypes = {
  children: PropTypes.element.isRequired,
};
