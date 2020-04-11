import styled from "styled-components";
import { primary, tertiary } from "styles/colors";

export const Wrapper = styled.div`
  .pagination {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    color: #707070;
    font-size: 0.9em;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 5px;
      /*width: 32px;*/
      height: 32px;
      border-radius: 5px;

      a {
        padding-left: 10px;
        padding-right: 10px;
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
  @media only screen and (max-width: 720px) {
    .pagination {
      li {
        a {
          font-size: 16px;
          padding-left: 8px;
          padding-right: 8px;
        }
      }
    }
  }
`;
