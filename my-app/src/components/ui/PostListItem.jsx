import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { useParams } from "react-router-dom";
const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(47, 51, 54);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;

  & > img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      filter: brightness(75%);
      transition: 0.2s;
    }
  }
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
  & > h3 {
    font-size: 15px;
    cursor: pointer;
    margin-right: 5px;
  }
  & > h4 {
    color: rgb(113, 118, 123);
    font-size: 15px;
    cursor: pointer;
  }
  & > p {
    color: rgb(113, 118, 123);
    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const PostContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const PostWidget = styled.div`
  display: flex;

  & > .MuiSvgIcon-root {
    color: rgb(113, 118, 123);
    font-size: 15px;
    height: 18.75px;
    width: 18.75px;
    font-weight: 400;
    line-height: 20px;
  }
  & > p {
    color: rgb(113, 118, 123);
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }
  cursor: pointer;
`;

function PostListItem({ writerName, writerNickname, content, Regdate }) {
  const { id } = useParams();
  return (
    <PostContainer>
      <img src="/img/profilePic.png" alt="profilePicture" />
      <PostBody>
        <PostHeader>
          <PostHeaderText>
            <h3>{writerName}</h3>
            <h4>{writerNickname}</h4>
            <p>·</p>
            <h4>{Regdate}</h4>
          </PostHeaderText>
        </PostHeader>
        <PostContent>
          <p>{content}</p>
        </PostContent>
        <PostWidget>
          <ModeCommentOutlinedIcon />
          <p>323</p>
          <CachedOutlinedIcon />
          <p>6.1K</p>
          <FavoriteBorderOutlinedIcon />
          <p>61K</p>
          <BarChartOutlinedIcon />
          <p>1.6M</p>
          <BookmarkBorderOutlinedIcon />
          <IosShareOutlinedIcon />
        </PostWidget>
      </PostBody>
    </PostContainer>
  );
}

export default PostListItem;
