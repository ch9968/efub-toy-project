import React from "react";
import styled from "styled-components";
import TweetBox from "./TweetBox";
import PostList from "./PostListItem";
import MiddleContainer from "./MiddleContainer";
const FeedHeader = styled.div`
  background: black;
  position: sticky;
  top: 0;
  z-index: 100;
  border: 0.001px solid;
  padding: 15px 20px;
`;

const Feed = () => {
  return (
    <MiddleContainer>
      <FeedHeader>
        <h2>Home</h2>
      </FeedHeader>
      <TweetBox />
      <PostList />
    </MiddleContainer>
  );
};

export default Feed;
