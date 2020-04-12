import React from "react";
import styled from "styled-components";
import { primary, secondary, tertiary } from "styles/colors";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import {
  TabList as DefaultTabList,
  TabPanel as DefaultTabPanel,
} from "react-tabs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(212, 32, 38, 0.1);
  min-height: 100vh;
  padding-bottom: 20px;
`;

export const BackIcon = styled(() => (
  <ChevronLeftRoundedIcon style={{ color: tertiary, fontSize: 80 }} />
))``;

export const Header = styled.div`
  background-color: ${primary};
  width: 100%;
  height: 300px;

  > svg {
    cursor: pointer;

    &:hover {
      animation: 150ms ease 0s infinite alternate none running moveLeft;
    }
  }

  @keyframes moveLeft {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-7px);
    }
  }
`;

export const MiniCard = styled.div`
  transform: translateX(220px);
  display: flex;
  position: absolute;
  align-items: center;
  img {
    border-radius: 50%;
    width: 58px;
    height: 58px;
    object-fit: cover;
  }
  span {
    color: ${tertiary};
    font-weight: 700;
    font-size: 18px;
    padding-left: 12px;
  }
`;

export const Card = styled.div`
  transform: translateY(-80px);
  display: flex;
  position: relative;
  > img {
    width: 190px;
    height: 270px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-top: 15px;
  > h3 {
    font-size: 28px;
    color: ${secondary};
    font-weight: 700;
  }
  > span {
    font-size: 16px;
    color: ${secondary};
  }
`;

export const TabList = styled(DefaultTabList)`
  border-bottom: none;
  display: flex;
  align-items: flex-end;
  height: 48px;
  li {
    transition: height 150ms ease;
    background-color: rgba(212, 32, 38, 0.3);
    border-radius: 5px 5px 0 0;
    height: 37px;
    display: flex;
    align-items: center;
    & + li {
      margin-left: 5px;
    }
    &:hover {
      height: 43px;
    }
  }
  .react-tabs__tab--selected {
    color: ${secondary};
    background-color: ${primary};
    color: ${tertiary};
    border: none;
    height: 43px;
  }
`;

export const TabPanel = styled(DefaultTabPanel)`
  padding-top: 20px;
`;
