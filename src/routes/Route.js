import React from "react";
import PropTypes from "prop-types";
import { Route as RouteDom } from "react-router-dom";

import Layout from "pages/_layouts";

// import { store } from "../store";

export default function Route({ component: Component, ...rest }) {
  return (
    <RouteDom
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
