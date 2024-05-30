import styled from "styled-components";

const MiddleContainer = styled.div`
  max-width: 600px;
  min-width: 600px;
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default MiddleContainer;
