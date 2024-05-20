import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostDetailPage from "./components/pages/PostDetailPage";
import MyPage from "./components/pages/MyPage";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/me" element={<MyPage name="이찬희" id="@meow__" />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
    </Routes>
  );
}

export default App;
