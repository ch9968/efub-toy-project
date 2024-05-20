import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
`;

const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  margin: 10px 10px;
`;

const PostBody = styled.div`
  margin-left: 10px;
  margin-right: 20px;
  & > img {
    border-radius: 20px;
  }
`;

const PostHeader = styled.div``;
const PostHeaderText = styled.div`
  display: flex;
  & > span {
    padding-left: 10px;
  }
`;
const PostHeaderDescription = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function PostList({ displayName, userName, verified, time }) {
  return (
    <PostContainer>
      <AccountCircleIcon />
      <PostBody>
        <PostHeader>
          <PostHeaderText>
            <h3>umbrella</h3>
            <span>
              <VerifiedIcon />
            </span>
          </PostHeaderText>
          <PostHeaderDescription>
            <p>"WHAT DO YOU WANT TO EAT???!!?!"</p>
          </PostHeaderDescription>
        </PostHeader>
        <img
          src="https://pbs.twimg.com/media/GN4NQ82XEAEungT?format=jpg&name=900x900"
          alt="cutepic"
          style={{
            borderRadius: "20px",
          }}
        />
      </PostBody>
    </PostContainer>
  );
}

export default PostList;
