import React, { useState } from "react";
import styled from "styled-components";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import Button from "@mui/material/Button";

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(47, 51, 54);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
  width: 100%;

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

const PostBody = styled.div`
  width: 100%;
  margin-left: 10px;
  margin-right: 20px;
  & > img {
    border-radius: 20px;
  }
`;

const PostHeader = styled.div``;

const PostHeaderText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & > span {
    padding-left: 10px;
  }
  & > h3 {
    font-size: 15px;
    cursor: pointer;
    margin-right: 10px;
  }
  & > h4 {
    color: rgb(113, 118, 123);
    font-size: 15px;
  }
  & > p {
    color: rgb(113, 118, 123);
    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }
  & > .MuiSvgIcon-root {
    color: rgb(113, 118, 123);
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
`;

const PostContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const WidgetB = styled.div`
  display: flex;
  & > .MuiSvgIcon-root {
    color: rgb(113, 118, 123);
    font-size: 15px;
    height: 18.75px;
    width: 18.75px;
    font-weight: 400;
    line-height: 20px;
    justify-content: space-between;
  }
  & > p {
    color: rgb(113, 118, 123);
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }
  cursor: pointer;
`;

const PostWidget = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Modal = styled.div``;
const ModalTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;
`;

const DeleteButton = styled(Button)`
  background-color: red !important;
  color: white !important;
  width: 200px;
  margin-bottom: 10px;
`;

const CancelButton = styled(Button)`
  background-color: white !important;
  color: black !important;
  border: 1px solid black !important;
  width: 200px;
  margin-top: 10px;
`;

function PostListItem({
  writerName,
  writerNickname,
  content,
  regDate,
  onClick,
  onDelete,
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <PostContainer>
        <img src="/img/profilePic.png" alt="profile" />
        <PostBody>
          <PostHeader>
            <PostHeaderText>
              <h3>{writerName}</h3>
              <h4>{writerNickname}</h4>
              <p>·</p>
              <h4>{new Date(regDate).toLocaleString()}</h4>
              <MoreHorizIcon onClick={() => setShow(true)} />
            </PostHeaderText>
          </PostHeader>
          <PostContent onClick={onClick}>
            <p>{content}</p>
          </PostContent>
          <PostWidget>
            <WidgetB>
              <ModeCommentOutlinedIcon />
              <p>323</p>
            </WidgetB>
            <WidgetB>
              <CachedOutlinedIcon />
              <p>6.1K</p>
            </WidgetB>
            <WidgetB>
              <FavoriteBorderOutlinedIcon />
              <p>61K</p>
            </WidgetB>
            <WidgetB>
              <BarChartOutlinedIcon />
              <p>1.6M</p>
            </WidgetB>
            <WidgetB>
              <BookmarkBorderOutlinedIcon />
              <IosShareOutlinedIcon />
            </WidgetB>
          </PostWidget>
        </PostBody>
      </PostContainer>
      <Dialog open={show} onClose={() => setShow(false)}>
        <DialogContent style={{ position: "relative" }}>
          <IconButton
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={() => setShow(false)}
          >
            <DisabledByDefaultOutlinedIcon />
          </IconButton>
          <Modal>
            <ModalTitle>Delete post?</ModalTitle>
            <p>
              This can't be undone and it will be removed from your profile, the
              timeline of any accounts that follow you, and from search results.
            </p>
            <ModalButtonContainer>
              <DeleteButton
                onClick={() => {
                  setShow(false);
                  onDelete();
                }}
              >
                Delete
              </DeleteButton>
              <CancelButton onClick={() => setShow(false)}>Cancel</CancelButton>
            </ModalButtonContainer>
          </Modal>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PostListItem;
