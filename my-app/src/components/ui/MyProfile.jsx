import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
const ProfileText = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  font-size: 24px;
  flex-direction: column;
  & > p {
    font-size: 16px;
    color: rgb(113, 118, 123);
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    h6 {
      font-size: 16px;
      color: white;
      margin-right: 8px;
    }

    p {
      font-size: 16px;
      text-align: left;
      color: rgb(113, 118, 123);
      margin-right: 20px;
    }
  }
`;
const JoinedText = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-size: 15px;
  }
  margin-bottom: 10px;
`;

function MyProfile({ memberId }) {
  const [member, setMember] = useState({ name: "", id: "", regDate: "" });

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/members/${memberId}`
        );
        const data = response.data;
        setMember({
          name: data.name,
          nickname: data.nickname,
          regDate: new Date(data.regDate).toLocaleDateString(),
        });
      } catch (error) {
        console.error("멤버 데이터 가져오기 불가:", error);
      }
    };
    getMemberData();
  }, [memberId]);

  return (
    <div>
      <ProfileText>
        <h5>{member.name}</h5>
        <p>{member.nickname}</p>
        <JoinedText>
          <CalendarMonthOutlinedIcon
            style={{
              color: "rgb(113, 118, 123)",
              width: "15px",
              marginRight: "5px",
            }}
          />
          <p>Joined {member.regDate}</p>
        </JoinedText>
        <div>
          <h6>1</h6>
          <p>Following</p>
          <h6>1.4K</h6>
          <p>Followers</p>
        </div>
      </ProfileText>
    </div>
  );
}

export default MyProfile;
