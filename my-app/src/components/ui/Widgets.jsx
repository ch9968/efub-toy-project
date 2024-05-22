import React from "react";
import styled from "styled-components";
const WidgetsContainer = styled.div`
  flex: 1fr;
`;

function Widgets() {
  return (
    <WidgetsContainer>
      <h2>Widgets</h2>
    </WidgetsContainer>
  );
}

export default Widgets;
