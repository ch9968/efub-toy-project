import React from "react";
import styled from "styled-components";

const StyledNavbarOption = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  cursor: pointer;
  & > h2 {
    padding-left: 20px;
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }
  &:hover {
    background-color: grey;
    border-radius: 20px;
    transition: 300ms;
  }
  &.NavbarOption--active {
    color: pink;
  }
`;

function NavbarOption({ active, text, Icon }) {
  return (
    <StyledNavbarOption className={active ? "NavbarOption--active" : ""}>
      <Icon />
      <h2>{text}</h2>
    </StyledNavbarOption>
  );
}

export default NavbarOption;
