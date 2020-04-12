import React from "react";
import styled from "styled-components";
import { primary } from "styles/colors";
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .left {
    cursor: pointer;

    &:hover {
      animation: 150ms ease 0s infinite alternate none running pulseLeft;
    }
  }

  .right {
    cursor: pointer;

    &:hover {
      animation: 150ms ease 0s infinite alternate none running pulseRight;
    }
  }

  @keyframes pulseLeft {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-3px);
    }
  }

  @keyframes pulseRight {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(3px);
    }
  }
`;

export const LeftArrow = styled(({ ...rest }) => (
  <ChevronLeftRounded
    {...rest}
    className="left"
    style={{ color: primary, fontSize: 60 }}
  />
))``;

export const RightArrow = styled(({ ...rest }) => (
  <ChevronRightRounded
    {...rest}
    className="right"
    style={{ color: primary, fontSize: 60 }}
  />
))``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Badges = styled.div`
  display: flex;
`;

export const Description = styled.div`
  display: flex;
`;
