import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ListDetailPage from "./components/pages/ListDetailPage";
import MyPage from "./components/pages/ListDetailPage";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
