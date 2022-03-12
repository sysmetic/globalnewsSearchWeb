import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import Bookmark from "./components/myPage/Bookmark";
import Mypage from "./pages/Mypage";
import { Layout } from "./components/layout/Layout";
import EditContainer from "./components/edit/EditContainer";
import { useEffect } from "react";
const { Translate } = require("@google-cloud/translate").v2;
const App = () => {
  const projectId = `tranquil-door-343909`;
  useEffect(() => {
    async function someFunction() {
      // Imports the Google Cloud client library

      // Instantiates a client
      const translate = new Translate({ projectId });

      // The text to translate
      const text = "Hello, world!";

      // The target language
      const target = "fr";

      // Translates some text into French
      const [translation] = await translate.translate(text, target);
      console.log(`Text: ${text}`);
      console.log(`Translation: ${translation}`);
    }
    someFunction();
  }, [projectId]);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/bookmark" element={<Bookmark />} />
          <Route path="/edit" element={<EditContainer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
