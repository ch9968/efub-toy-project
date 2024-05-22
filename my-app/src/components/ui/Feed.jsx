import React from "react";
import styled from "styled-components";
import TweetBox from "./TweetBox";
import PostList from "./PostListItem";
import MiddleContainer from "./MiddleContainer";

import SettingsIcon from "@mui/icons-material/Settings";
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
const Feed = () => {
  return (
    <MiddleContainer>
      <FeedHeader>
        <h2>For you</h2>
        <h2>Following</h2>
        <SettingsIcon />
      </FeedHeader>
      <TweetBox />
      <PostList />
    </MiddleContainer>
  );
};

export default Feed;
