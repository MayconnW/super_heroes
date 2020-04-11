import styled from "styled-components";
import { primary } from "styles/colors";

export const Container = styled.div`
  margin: 34px 42px 0 42px;
  label {
    display: flex;
    flex-direction: column;
    color: ${primary};
    font-size: 16px;
    line-height: 1.2;
  }
  input {
    height: 31px;
    width: 400px;
    border-radius: 4px;
    border: 1px solid #a5a5a5;
    padding-left: 10px;
  }

  @media only screen and (max-width: 720px) {
    margin-top: 12px;
    input {
      width: 100%;
    }
  }
`;
