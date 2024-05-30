import React from "react";
import styled from "styled-components";
import TweetBox from "./TweetBox";
import MiddleContainer from "./MiddleContainer";
import SettingsIcon from "@mui/icons-material/Settings";
import Posts from "./Posts";

const FeedHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
  text-align: center;
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

export { FeedHeader };
const Feed = () => {
  return (
    <MiddleContainer>
      <FeedHeader>
        <h2>For you</h2>
        <h2>Following</h2>
        <SettingsIcon />
      </FeedHeader>
      <TweetBox />
      <Posts />
    </MiddleContainer>
  );
};

export default Feed;
