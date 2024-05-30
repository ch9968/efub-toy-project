import "../../App.css";
import Widgets from "../ui/Widgets";
import Navbar from "../ui/Navbar";
import styled from "styled-components";
import MiddleContainer from "../ui/MiddleContainer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MyPosts from "../ui/MyPosts";
import axios from "axios";
import MyProfile from "../ui/MyProfile";

const BackIcon = styled(KeyboardBackspaceIcon)`
  color: white;
  margin-left: 15px;
  margin-right: 30px;
`;

const MyPageHeader = styled.div`
  display: flex;
  align-items: center;
  background: black;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 20px;
  border-bottom: 1px solid rgb(47, 51, 54);
  align-items: center;
  & > h2 {
    font-size: 15px;
    font-weight: 500;
  }
`;

const MyPageHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  & > h3 {
    color: rgb(113, 118, 123);
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const BackgroundBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(62, 65, 68);
`;
const MyProfileBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfileBtn = styled.button`
  background-color: black;
  color: white;
  border: 1px solid rgb(83, 100, 113);
  padding: 8px 16px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 15px;
  border-radius: 20px;
`;

const ProfileNavbar = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

const NavbarBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgb(22, 24, 28);
  }

  & > h6 {
    font-size: 15px;
    color: rgb(113, 118, 123);
  }

  & > #posts {
    color: white;
  }

  .selector {
    width: 50%;
    height: 4px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    background-color: rgb(29, 155, 240);
  }
`;

function MyPage() {
  const navigate = useNavigate();
  const { memberId } = useParams();
  const [myPage, setMyPage] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMyPage = async () => {
      try {
        if (memberId) {
          setMyPage([]);
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/members/${memberId}`
          );
          setMyPage(response.data);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setMyPage([]);
      }
    };
    getMyPage();
  }, [memberId]);

  if (!myPage) return null;

  return (
    <div className="app">
      <Navbar />
      <MiddleContainer>
        <MyPageHeader>
          <BackIcon onClick={() => navigate(-1)} />
          <MyPageHeaderText>
            <h2>{myPage.name}</h2>
            <h3>2 posts</h3>
          </MyPageHeaderText>
        </MyPageHeader>
        <BackgroundBox />
        <MyProfileBox>
          <img
            src="/img/profilePic.png"
            alt="profile"
            style={{
              borderRadius: "50%",
              height: "130px",
              width: "130px",
              marginLeft: "20px",
              marginTop: "-75px",
            }}
          />
          <ProfileBtn>Set up Profile</ProfileBtn>
        </MyProfileBox>
        <MyProfile memberId={memberId} />
        <ProfileNavbar>
          <NavbarBox>
            <h6 id="posts">Posts</h6>
            <div className="selector"></div>
          </NavbarBox>
          <NavbarBox>
            <h6>Replies</h6>
          </NavbarBox>
          <NavbarBox>
            <h6>Highlights</h6>
          </NavbarBox>
          <NavbarBox>
            <h6>Articles</h6>
          </NavbarBox>
          <NavbarBox>
            <h6>Media</h6>
          </NavbarBox>
          <NavbarBox>
            <h6>Likes</h6>
          </NavbarBox>
        </ProfileNavbar>
        <MyPosts memberId={memberId} />
      </MiddleContainer>
      <Widgets />
    </div>
  );
}

export default MyPage;
