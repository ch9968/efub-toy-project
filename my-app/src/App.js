import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostDetailPage from "./components/pages/PostDetailPage";
import MyPage from "./components/pages/MyPage";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/myPage/:memberId" element={<MyPage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
    </Routes>
  );
}

export default App;
