import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media only screen and (max-width: 720px) {
    margin-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;
