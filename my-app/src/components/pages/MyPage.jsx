import "../../App.css";
import Widgets from "../ui/Widgets";
import Navbar from "../ui/Navbar";
import styled from "styled-components";
import MiddleHeader from "../ui/MiddleHeader";
import MiddleContainer from "../ui/MiddleContainer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const BackgroundBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #3b3939;
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
        <MiddleHeader>
          <KeyboardBackspaceIcon />
          <h2>이찬희</h2>
        </MiddleHeader>
        <BackgroundBox />
        <AccountCircleIcon
          style={{
            fontSize: "200px",
            color: "grey",
            marginLeft: "10px",
            marginTop: "-120px",
          }}
        />
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
