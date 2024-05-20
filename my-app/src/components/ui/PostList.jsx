import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";
const PostListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
function PostList() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function getPostList() {
      try {
        setPostList(null);
        const response = await axios.get(`blabla/posts`);
        setPostList(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPostList();
  }, []);

  if (!postList) return null;
  return (
    <PostListItemContainer>
      {postList.map((post) => {
        return (
          <PostListItem
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        );
      })}
    </PostListItemContainer>
  );
}

export default PostList;
