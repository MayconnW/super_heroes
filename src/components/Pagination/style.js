import styled from "styled-components";
import { primary, tertiary } from "styles/colors";

export const Wrapper = styled.div`
  .pagination {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    color: #707070;
    font-size: 0.9em;
    padding-right: 80px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 5px;
      width: 32px;
      height: 32px;
      border-radius: 50%;

      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        color: ${primary};
        font-size: 21px;
      }

      svg {
        width: 23px;
        height: 23px;
      }

      transition: ease 0.2s;

      &:hover {
        background-color: rgba(212, 32, 38, 0.3);
      }

      &:active {
        background-color: rgba(212, 32, 38, 0.1);
      }

      will-change: background, font-weight;
    }

    .activated {
      background-color: ${primary};
      &:hover {
        background-color: ${primary};
      }
      color: ${tertiary};
      a {
        color: ${tertiary};
      }
    }
  }
`;
