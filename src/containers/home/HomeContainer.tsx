import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCallback, useState } from "react";
import { fetchNewList } from "../../redux/news/newsListSlice";
import Search from "../../components/home/Search";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(state => state.newsList);

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);
  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [categories, setCategories] = useState("mp,op,r");
  const [identifiers, setIdentifiers] = useState("");

  function openKeywordList(isOpend: boolean) {
    setIsOpendKeywordList(isOpend);
  }

  function setIdentifiersString(Identifier: string) {
    setIdentifiers(Identifier);
    console.log(identifiers);
  }
  const setLanguageCode = (langCode: string) => {
    setLanguage(langCode);
  };
  const setTimeFilterCode = (timeCode: string) => {
    setTimeFilter(timeCode);
  };
  const setCategoriesCode = (categoriesCode: string) => {
    setCategories(categoriesCode);
  };

  const searchNews = (str?: string) => {
    const identifier = str ? str : identifiers;
    const searchPayload = {
      identifiers: identifier,
      language,
      timeFilter,
      categories
    };
    dispatch(fetchNewList(searchPayload));
  };

  return (
    <>
      {identifiers}
      <Intro />
      <Search
        openKeywordList={openKeywordList}
        setLanguageCode={setLanguageCode}
        setTimeFilterCode={setTimeFilterCode}
        setIdentifiersString={setIdentifiersString}
        setCategoriesCode={setCategoriesCode}
        searchNews={searchNews}
      />
      {isOpendKeywordList && (
        <KeywordSelectContainer
          setIdentifiersString={setIdentifiersString}
          searchNews={searchNews}
          setIdentifiers={setIdentifiers}
        />
      )}
    </>
  );
};

export default HomeContainer;
