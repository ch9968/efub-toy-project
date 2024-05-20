import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
const TweetBoxContainer = styled.div`
  padding-right: 10px;
  padding-bottom: 10px;
  border-bottom: 0.1px solid;

  & > form {
    display: flex;
    flex-direction: column;
  }
`;
const TweetBox__input = styled.div`
  padding: 20px;
  display: flex;
  & > input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
  }
`;
const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  font-size: 40px;
`;
const PostButton = styled.button`
  background-color: rgb(29, 155, 240);
  color: white;
  border: none;
  width: 100px;
  height: 50px;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 900;
  text-transform: inherit;
  border-radius: 30px;
  margin-right: 20px;
  margin-top: 20px;
  margin-left: auto; /*오른쪽으로 밀기 */
  cursor: pointer;
`;

function TweetBox() {
  return (
    <TweetBoxContainer>
      <form>
        <TweetBox__input>
          <StyledAccountCircleIcon />
          <input placeholder="What's happening?" type="text" />
        </TweetBox__input>
        <PostButton>Post</PostButton>
      </form>
    </TweetBoxContainer>
  );
}

export default TweetBox;
