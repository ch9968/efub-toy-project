import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostListItem from "./PostListItem";
import axios from "axios";
const PostListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function PostList({ memberId, postId }) {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  let config;
  if (!memberId && !postId) {
    console.log("FEED");
    config = {
      url: "http://13.209.76.203:8080/posts",
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
  } else if (!postId) {
    console.log("Member: " + memberId);
    config = {
      url: `http://13.209.76.203:8080/members/${memberId}/posts`,
      method: "get",
      body: { memberId },
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
  } else {
    console.log("Post: " + postId);
    config = {
      url: `http://13.209.76.203:8080/posts/${postId}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
  }

  useEffect(() => {
    async function getPostList() {
      try {
        //setPostList(null);
        //const response = await axios.request(config);
        //console.log(response);
        //setPostList(response.data);
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
            key={post.id}
            writerName={post.writerName}
            writerNickname={post.writerNickname}
            content={post.content}
            regDate={post.regDate}
            onClick={() => navigate(`/posts/${post.id}`)}
          />
        );
      })}
    </PostListItemContainer>
  );
}

export default PostList;
