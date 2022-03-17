import React from "react";
import styled from "@emotion/styled";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import CommonContainer from "../../layout/CommonContainer";
import { useSearch } from "./../../../hooks/useSearch";
import { useScrollHeader } from "../../layout/useScrollHeader";
import { useEffect } from "react";
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

  const { updateScroll, scrollPosition } = useScrollHeader();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Wrap scrollPosition={scrollPosition}>
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
      </CommonContainer>
    </Wrap>
  );
};

export default PersonalizeNav;

interface Props {
  scrollPosition:number
}

const Wrap = styled.section<Props>`
  background-image: linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );
  height: auto;

  .original_header {
    position: relative;
  }
  .change_header {
    position: fixed;
    top: 70px;
    width: 100%;
    height: 100%;
  }
  /* height: 373px; */
  .pt-31 {
    padding-top: 113px;
    padding-bottom: 140px;
  }
`;
