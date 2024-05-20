import React from "react";
import styled from "styled-components";

const MiddleContainer = styled.div`
  flex: 0.4;
  border-right: 0.001px solid;
  min-width: fit-content;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default MiddleContainer;
