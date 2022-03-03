import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import GlobalHeader from "./components/layout/GlobalHeader";
import GlobalFooter from "./components/layout/GlobalFooter";
import Bookmark from "./components/Mypage/Bookmark";
import Mypage from "./pages/Mypage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalHeader></GlobalHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />}></Route>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/bookmark" element={<Bookmark />} />
      </Routes>
      <GlobalFooter />
    </BrowserRouter>
  );
};
export default App;
