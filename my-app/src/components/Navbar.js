import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import XIcon from "@mui/icons-material/X";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconText = styled.span``;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameText = styled.span``;
const IdText = styled.span``;

const Navbar = () => {
  return (
    <NavContainer>
      <IconBox>
        <XIcon />
      </IconBox>
      <IconBox>
        <HomeIcon />
        <IconText>Home</IconText>
      </IconBox>
      <IconBox>
        <AccountCircleIcon />
        <ProfileBox>
          <NameText>이찬희</NameText>
          <IdText>@efub_4th_toy</IdText>
        </ProfileBox>
        <MoreHorizIcon />
      </IconBox>
    </NavContainer>
  );
};

export default Navbar;
