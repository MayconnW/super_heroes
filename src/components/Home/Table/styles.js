import styled from "styled-components";
import { primary, secondary, tertiary } from "styles/colors";
import DefaultPagination from "components/Pagination";

export const Container = styled.div`
  margin: 34px 42px 0 42px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 720px) {
    margin: 12px 0 0 0;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 10px;
  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled(Box)`
  div {
    background: ${primary};
    color: ${tertiary};
    width: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    line-height: 1.2;
    height: 37px;
    @media only screen and (max-width: 720px) {
      padding-left: 98px;
      & + div {
        display: none;
      }
    }
  }
`;

export const Body = styled(Box)`
  padding: 20px 12px;
  grid-column-gap: 0;
  border-bottom: 2px solid #f6d2d3;
  &:hover {
    background-color: rgba(212, 32, 38, 0.1);
  }
  div {
    display: flex;
    align-items: center;
    h3 {
      color: ${secondary};
      font-size: 21px;
      line-height: 1.1;
      margin-left: 25px;
    }
    > span {
      color: ${secondary};
      font-size: 21px;
      line-height: 1.1;
      margin-left: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    img {
      border-radius: 50%;
      width: 58px;
      height: 58px;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 720px) {
    padding: 18px 12px;
    div {
      & + div {
        display: none;
      }
    }
  }
  will-change: background;
`;

export const Pagination = styled(DefaultPagination)`
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 720px) {
    margin: 18px 0 24px 0;
  }
`;

export const SingleLineWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  height: 50px;

  > div,
  > svg {
    margin-right: 10px;
  }
`;
