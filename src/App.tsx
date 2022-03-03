import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import GlobalHeader from "./components/layout/GlobalHeader";
import GlobalFooter from "./components/layout/GlobalFooter";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalHeader></GlobalHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <GlobalFooter />
    </BrowserRouter>
  );
};

export default App;
