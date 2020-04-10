import React from "react";
import PropTypes from "prop-types";
import { Route as RouteDom, Redirect } from "react-router-dom";

import AuthLayout from "pages/_layouts/disconnected";
import DefaultLayout from "pages/_layouts/connected";

// import { store } from "../store";

export default function Route({
  component: Component,
  isPrivate,
  special,
  ...rest
}) {
  const signed = true; // store.getState().auth;

  if (!signed && isPrivate && !special) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate && !special) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

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
  isPrivate: PropTypes.bool,
  special: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Route.defaultProps = {
  isPrivate: true,
  special: false,
};
