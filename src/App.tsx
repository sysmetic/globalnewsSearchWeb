import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Bookmark from "./components/Mypage/Bookmark";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/bookmark" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
