import React from "react";
import styled from "styled-components";
import TweetBox from "./TweetBox";
import PostList from "./PostList";

const FeedContainer = styled.div`
  flex: 0.4;
  border-right: 0.001px solid;
  min-width: fit-content;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
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
    <FeedContainer>
      <FeedHeader>
        <h2>Home</h2>
      </FeedHeader>
      <TweetBox />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </FeedContainer>
  );
};

export default Feed;