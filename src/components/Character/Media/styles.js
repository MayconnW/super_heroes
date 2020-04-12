import React from "react";
import styled from "styled-components";
import { primary } from "styles/colors";
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";

export const Container = styled.div`
  display: flex;
  width: 100%;

  .left {
    cursor: pointer;
    margin-top: 165px;

    &:hover {
      animation: 150ms ease 0s infinite alternate none running pulseLeft;
    }
  }

  .right {
    cursor: pointer;
    margin-top: 165px;

    &:hover {
      animation: 150ms ease 0s infinite alternate none running pulseRight;
    }
  }

  .inactive {
    cursor: not-allowed;
    opacity: 0.8;
    &:hover {
      animation: none;
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

export const LeftArrow = styled(({ inactive, ...rest }) => (
  <ChevronLeftRounded
    {...rest}
    className={inactive ? "left inactive" : "left"}
    style={{ color: primary, fontSize: 60 }}
  />
))``;

export const RightArrow = styled(({ inactive, ...rest }) => (
  <ChevronRightRounded
    {...rest}
    className={inactive ? "right inactive" : "right"}
    style={{ color: primary, fontSize: 60 }}
  />
))``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 300px;
  }
`;

export const Badges = styled.div`
  display: flex;
`;

export const Description = styled.div`
  display: flex;
`;
