import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import useDimensions from "react-use-dimensions";

import { setIsMobile } from "store/modules/resolution/actions";

import { Wrapper, Container, Content } from "./style";

export default function Connected({ children }) {
  const dispatch = useDispatch();

  const [ref, { width }] = useDimensions();
  const timeout = useRef({ current: 0 });
  useEffect(() => {
    function setConf() {
      if (width <= 720) {
        dispatch(setIsMobile(true));
        return;
      }
      dispatch(setIsMobile(false));
    }

    timeout.current = setTimeout(() => {
      setConf();
    }, 500);
    return () => clearTimeout(timeout.current);
  }, [dispatch, width]);

  return (
    <Wrapper>
      <Container ref={ref}>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

Connected.propTypes = {
  children: PropTypes.element.isRequired,
};
