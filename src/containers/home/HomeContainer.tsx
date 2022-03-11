import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";
import SearchContainer from "./SearchContainer";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchNewList } from "../../redux/news/newsListSlice";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(state => state.newsList);

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);

  useEffect(() => {
    dispatch(fetchNewList());
    console.log(newsList);
  }, []);

  function openKeywordList(isOpend: boolean) {
    setIsOpendKeywordList(isOpend);
  }

  return (
    <>
      <Intro />
      <SearchContainer openKeywordList={openKeywordList} />
      {isOpendKeywordList && <KeywordSelectContainer />}
    </>
  );
};

export default HomeContainer;
