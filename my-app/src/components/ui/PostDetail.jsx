import React, { useState, useEffect } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";

function PostDetail({ postId }) {
  const [postDetail, setPostDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostDetail() {
      try {
        if (postId) {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/posts/${postId}`
          );
          if (response.data) {
            setPostDetail(response.data);
          } else {
            throw new Error("Post not found");
          }
        }
      } catch (error) {
        console.error("Error fetching post detail:", error);
        setError(error.message);
      }
    }
    getPostDetail({ postId });
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!postDetail) {
    return <div>Loading...</div>;
  }

  return (
    <PostListItem
      key={postDetail.postId}
      writerName={postDetail.writerName}
      writerNickname={postDetail.writerNickname}
      content={postDetail.content}
      regDate={postDetail.regDate}
    />
  );
}

export default PostDetail;
