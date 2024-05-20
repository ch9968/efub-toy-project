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

function MyPage() {
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
      </MiddleContainer>

      <Widgets />
    </div>
  );
}

export default MyPage;
