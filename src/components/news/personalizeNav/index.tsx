import styled from "@emotion/styled";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import CommonContainer from "../../layout/CommonContainer";
import NewsTabList from "./NewsTabList";
import { useSearch } from "../../../hooks/useSearch";

const PersonalizeNav = () => {
  const {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews
  } = useSearch();
  return (
    <Wrap>
      <CommonContainer>
        <div className="pt-31">
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
            />
          )}
        </div>
        <NewsTabList />
      </CommonContainer>
    </Wrap>
  );
};

export default PersonalizeNav;

const Wrap = styled.section`
  background-image: linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );
  height: auto;
  .pt-31 {
    padding-top: 31px;
  }
`;
