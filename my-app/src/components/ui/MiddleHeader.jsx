import React from "react";
import styled from "styled-components";

const MiddleHeader = styled.div`
  display: flex;
  background: black;
  position: sticky;
  top: 0;
  z-index: 100;
  border: 0.001px solid;
  padding: 15px 20px;
  & > h2 {
    padding-left: 20px;
  }
`;

export default MiddleHeader;
