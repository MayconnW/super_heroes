import styled from "styled-components";
import { primary } from "styles/colors";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  margin: 20px 42px 0 42px;
  text-transform: uppercase;
  > div {
    display: flex;
    span {
      margin-left: 2px;
    }
  }
  h3 {
    color: ${primary};
    font-size: 27px;
    font-weight: 900;
    line-height: 1.2;
    > strong > strong {
      border-bottom: 4px solid ${primary};
    }
  }
  span {
    color: ${primary};
    font-size: 27px;
    font-weight: 300;
    line-height: 1.2;
  }

  @media only screen and (max-width: 720px) {
    margin-top: 12px;
    h3 {
      font-size: 16px;
      > strong {
        border-bottom: 4px solid ${primary};
      }
    }
    span {
      font-size: 16px;
    }
    > span {
      display: none;
    }
  }
`;
