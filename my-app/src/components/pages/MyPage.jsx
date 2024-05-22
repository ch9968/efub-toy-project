import "../../App.css";
import Widgets from "../ui/Widgets";
import Navbar from "../ui/Navbar";
import styled from "styled-components";
import MiddleContainer from "../ui/MiddleContainer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MyPageHeader = styled.div``;
const BackgroundBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #3b3939;
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
  margin-left: 15px;
  display: flex;
  font-size: 24px;
  flex-direction: column;
  & > p {
    font-size: 16px;
    color: grey;
    margin-bottom: 10px;
  }

  div {
    display: grid;
    width: 55%;
    grid-template-columns: 1fr 1fr;

    div {
      display: flex;
    }

    h6 {
      font-size: 16px;
      color: white;
      margin-right: 8px;
    }

    p {
      font-size: 16px;
      text-align: left;
      color: grey;
    }
  }
`;

function MyPage({ name, id }) {
  return (
    <div className="app">
      <Navbar />
      <MiddleContainer>
        <MyPageHeader>
          <KeyboardBackspaceIcon />
          <h2>이찬희</h2>
        </MyPageHeader>
        <BackgroundBox />
        <MyProfileBox>
          <img
            src="/img/profilePic.png"
            style={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              marginLeft: "20px",
              marginTop: "-75px",
            }}
          />
          <ProfileBtn>Set up Profile</ProfileBtn>
        </MyProfileBox>
        <ProfileText>
          <h5>{name}</h5>
          <p>{id}</p>
          <p>Joined May 2024</p>
          <div>
            <div>
              <h6>1</h6>
              <p>Following</p>
            </div>
            <div>
              <h6>1.4K</h6>
              <p>Followers</p>
            </div>
          </div>
        </ProfileText>
      </MiddleContainer>

      <Widgets />
    </div>
  );
}

export default MyPage;
