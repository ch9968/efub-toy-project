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

function MyPosts({ memberId }) {
  const [myPosts, setMyPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getMyPosts() {
      try {
        setMyPosts([]);
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/members/${memberId}/posts`
        );

        if (response.data && Array.isArray(response.data.posts)) {
          setMyPosts(response.data.posts);
        } else {
          throw new Error("데이터 포맷이 맞지 않음.");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setMyPosts([]);
      }
    }
    getMyPosts();
  }, [memberId]);

  useEffect(() => {
    console.log("My Posts:", myPosts);
  }, [myPosts]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <PostListItemContainer>
      {myPosts.length > 0 ? (
        myPosts.map((myPost) => (
          <PostListItem
            key={myPost.postId}
            writerName={myPost.writerName}
            writerNickname={myPost.writerNickname}
            content={myPost.content}
            regDate={myPost.regDate}
            onClick={() => navigate(`/posts/${myPost.postId}`)}
          />
        ))
      ) : (
        <div>포스트 없음.</div>
      )}
    </PostListItemContainer>
  );
}

export default MyPosts;
