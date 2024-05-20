import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StyledMoreHorizonIcon = styled(MoreHorizIcon)`
  margin-left: auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #292929;
    transition: 300ms;
  }
`;
const ProfileText = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  & > p {
    color: grey;
  }
`;

function Profile({ name, id }) {
  return (
    <ProfileContainer>
      <AccountCircleIcon />
      <ProfileText>
        <h5>{name}</h5>
        <p>{id}</p>
      </ProfileText>
      <StyledMoreHorizonIcon />
    </ProfileContainer>
  );
}

export default Profile;
