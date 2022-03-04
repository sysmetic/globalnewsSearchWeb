import ControlerSection from "../components/news/ControlerSection";
import NewsMain from "../components/news/NewsMain";
import NewsSearchSection from "../components/news/NewsSearchSection";

const NewsContainer = () => {
  return (
    <div>
      <NewsSearchSection />
      <ControlerSection />
      <NewsMain />
    </div>
  );
};

export default NewsContainer;
