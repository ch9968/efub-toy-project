import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TweetBoxContainer = styled.div`
  padding-right: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(47, 51, 54);

  & > form {
    display: flex;
    flex-direction: column;
  }
`;
const TweetBoxInput = styled.div`
  padding: 20px;
  display: flex;
  & > input {
    flex: 1;
    margin-left: 10px;
    font-size: 20px;
    border: none;
    background-color: black;
    color: white;
    outline: none;
  }

  & > img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      filter: brightness(75%);
      transition: 0.2s;
    }
  }
`;

const PostButton = styled.button`
  background-color: rgb(29, 155, 240);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  text-transform: inherit;
  border-radius: 30px;
  margin-right: 20px;
  margin-top: 20px;
  margin-left: auto; /*오른쪽으로 밀기 */
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
    transition: 0.2s;
  }
`;

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const navigate = useNavigate();
  const postTweet = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, {
        memberId: 1,
        content: tweetMessage,
      });
      setTweetMessage("");
      e.target.value = "";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TweetBoxContainer>
      <form>
        <TweetBoxInput>
          <img
            src="/img/profilePic.png"
            alt="profilePicture"
            onClick={() => navigate("myPage/1")}
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is happening?!"
            type="text"
          />
        </TweetBoxInput>
        <PostButton onClick={postTweet} type="submit">
          Post
        </PostButton>
      </form>
    </TweetBoxContainer>
  );
}

export default TweetBox;
