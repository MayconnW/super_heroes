import styled from "styled-components";
import { primary } from "styles/colors";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${primary};
`;
