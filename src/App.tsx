import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import Bookmark from "./components/mypage/Bookmark";
import Mypage from "./pages/Mypage";
import { Layout } from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/bookmark" element={<Bookmark />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
