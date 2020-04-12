import React from "react";
import styled from "styled-components";
import { primary } from "styles/colors";
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";
import DefaultTooltip from "@material-ui/core/Tooltip";

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
  @media only screen and (max-width: 720px) {
    img {
    }
  }
`;

export const Badges = styled.div`
  display: flex;
  @media only screen and (max-width: 720px) {
    > button {
      padding: 8px;
      font-size: 1.2rem;
      margin-top: 10px;
      margin-bottom: 10px;
      &:last-child {
        display: none;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
`;

export const Tooltip = styled(DefaultTooltip)``;
