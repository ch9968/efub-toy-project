import "../../App.css";
import Widgets from "../ui/Widgets";
import Navbar from "../ui/Navbar";
import styled from "styled-components";
import MiddleContainer from "../ui/MiddleContainer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate, useParams } from "react-router-dom";
import PostList from "../ui/PostList";

const BackIcon = styled(KeyboardBackspaceIcon)`
  color: white;
  margin-left: 15px;
  margin-right: 30px;
`;
const MyPageHeader = styled.div`
  display: flex;
  align-items: center;
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
  const name = "이찬희";
  const { id } = useParams();
  console.log(id);
  return (
    <div className="app">
      <Navbar />
      <MiddleContainer>
        <MyPageHeader>
          <BackIcon onClick={() => navigate(-1)} />
          <MyPageHeaderText>
            <h2>이찬희</h2>
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
        <ProfileText>
          <h5>{name}</h5>
          <p>{id}</p>
          <JoinedText>
            <CalendarMonthOutlinedIcon
              style={{
                color: "rgb(113, 118, 123)",
                width: "15px",
                marginRight: "5px",
              }}
            />
            <p>Joined May 2024</p>
          </JoinedText>
          <div>
            <h6>1</h6>
            <p>Following</p>
            <h6>1.4K</h6>
            <p>Followers</p>
          </div>
        </ProfileText>
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

        <PostList memberId={id} />
      </MiddleContainer>
      <Widgets />
    </div>
  );
}

export default MyPage;
