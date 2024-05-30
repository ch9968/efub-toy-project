import "../../App.css";
import Widgets from "../ui/Widgets";
import Navbar from "../ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import MiddleContainer from "../ui/MiddleContainer";
import { styled } from "styled-components";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useState, useEffect } from "react";
import axios from "axios";
import PostDetail from "../ui/PostDetail";

const BackIcon = styled(KeyboardBackspaceIcon)`
  color: white;
  margin-left: 15px;
  margin-right: 30px;
  cursor: pointer;
`;

const PostDetailHeader = styled.div`
  display: flex;
  align-items: center;
  background: black;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 20px;
  border-bottom: 1px solid rgb(47, 51, 54);
  align-items: center;
  & > h2 {
    font-size: 20px;
    font-weight: 800;
    margin-right: 30px;
  }
`;

function PostDetailPage() {
  const [postDetail, setPostDetail] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        if (postId) {
          const res = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/posts/${postId}`
          );
          console.log(res.data);
          setPostDetail(res.data);
        }
      } catch (error) {
        console.error("포스트 디테일 불러오기 실패:", error);
        setError(error.message);
      }
    };
    getPostDetails();
  }, [postId]);

  return (
    <div className="app">
      <Navbar />
      <MiddleContainer>
        <PostDetailHeader>
          <BackIcon onClick={() => navigate(-1)} />
          <h2>Post</h2>
          <h4>{postDetail.writerName}</h4>
        </PostDetailHeader>
        <PostDetail
          postId={postDetail.postId}
          writerName={postDetail.writerName}
          writerNickname={postDetail.writerNickname}
          content={postDetail.content}
          regDate={postDetail.regDate}
        />
      </MiddleContainer>
      <Widgets />
    </div>
  );
}

export default PostDetailPage;
