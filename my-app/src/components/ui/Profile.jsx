import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";

const StyledMoreHorizonIcon = styled(MoreHorizIcon)`
  margin-left: auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #292929;
    transition: 300ms;
  }
  & > img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
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

function Profile({ memberId }) {
  const [member, setMember] = useState({ name: "", id: "" });

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/members/${memberId}`
        );
        setMember(response.data);
      } catch (error) {
        console.error("멤버 데이터 가져오기 실패:", error);
      }
    };

    fetchMemberData();
  }, [memberId]);

  return (
    <ProfileContainer>
      <img src="/img/profilePic.png" alt="profilePicture" />
      <ProfileText>
        <h5>{member.name}</h5>
        <p>{member.nickname}</p>
      </ProfileText>
      <StyledMoreHorizonIcon />
    </ProfileContainer>
  );
}

export default Profile;
