import NewsControlContainer from "./NewsControlContainer";
import NewsMain from "../../components/news/NewsMain";
import NewsSearchSection from "../../components/news/NewsSearchSection";

const NewsContainer = () => {
  return (
    <div>
      <NewsSearchSection />
      <NewsControlContainer/>
      <NewsMain />
    </div>
  );
};

export default NewsContainer;
