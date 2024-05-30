import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostListItem from "./PostListItem";
import axios from "axios";
const PostListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/posts`
      );

      if (Array.isArray(response.data.posts)) {
        setPosts(response.data.posts);
      } else {
        throw new Error("Data format is not supported");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
      setPosts([]);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`);
      setPosts(posts.filter((post) => post.postId !== postId));
    } catch (error) {
      console.error("Failed to delete post:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log("Posts:", posts);
  }, [posts]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <PostListItemContainer>
      {posts.map((post) => (
        <PostListItem
          key={post.postId}
          writerName={post.writerName}
          writerNickname={post.writerNickname}
          content={post.content}
          regDate={post.regDate}
          onClick={() => navigate(`/posts/${post.postId}`)}
          onDelete={() => deletePost(post.postId)}
        />
      ))}
    </PostListItemContainer>
  );
}

export default Posts;
