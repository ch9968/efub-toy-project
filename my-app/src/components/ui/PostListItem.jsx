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
const PostContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

function PostListItem({
  displayName,
  userName,
  verified,
  text,
  avatar,
  image,
}) {
  return (
    <PostContainer>
      <AccountCircleIcon />
      <PostBody>
        <PostHeader>
          <PostHeaderText>
            <h3>{displayName}</h3>
            <h3>{userName}</h3>
            <span>{verified && <VerifiedIcon />}</span>
          </PostHeaderText>
        </PostHeader>
        <PostContent>
          <p>{text}</p>
        </PostContent>
      </PostBody>
    </PostContainer>
  );
}

export default PostListItem;