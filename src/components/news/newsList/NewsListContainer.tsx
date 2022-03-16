import { useNewsList } from "../hooks/useNewsList";
import NewsList from "./NewsList";
const NewsListContainer = () => {
  const { newsSorts } = useNewsList();
  
  return (
    <>
      {newsSorts === "정렬순" ? (
        // <div>정렬순</div>
        <NewsList />
      ) : newsSorts === "인기순" ? (
        <div>인기순</div>
      ) : newsSorts === "최신순" ? (
        <div>최신순</div>
      ) : null}
    </>
  );
};

export default NewsListContainer;
