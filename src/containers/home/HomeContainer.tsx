import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";
import SearchContainer from "./SearchContainer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { fetchNewList } from "../../redux/news/newsListSlice";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(state => state.newsList);

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);

  function openKeywordList(isOpend: boolean) {
    setIsOpendKeywordList(isOpend);
  }

  function selectKeyword(keywordName: string) {
    dispatch(fetchNewList(keywordName));
  }

  return (
    <>
      <Intro />
      <SearchContainer openKeywordList={openKeywordList} />
      {isOpendKeywordList && (
        <KeywordSelectContainer selectKeyword={selectKeyword} />
      )}
    </>
  );
};

export default HomeContainer;
