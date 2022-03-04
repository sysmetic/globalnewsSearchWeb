import styled from "@emotion/styled";
import { SearchFilterItem } from "./SearchFilterItem";
import searchIcon from "../../assets/seach.svg";

const Search = () => {
  return (
    <SearchArea>
      <div>
        <KeywordSearchButton>키워드 전체보기</KeywordSearchButton>
      </div>
      <SearchWarp>
        <form>
          <SearchFilterSelectWrap>
            <Legend>뉴스 키워드 검색</Legend>
            <SearchFilterItem />
            <SearchFilterItem />
            <SearchFilterItem />
            <SearchFilterItem />
            <SearchBox>
              <input
                type="text"
                placeholder="AAPL, MSFT, 005930, Gold, Oil, DJIA, Nikkei eg... "
              />
            </SearchBox>
          </SearchFilterSelectWrap>
        </form>
      </SearchWarp>
    </SearchArea>
  );
};

export default Search;

const SearchBox = styled.div`
  margin-left: 28px;
  display: flex;
  align-items: center;
  background: url("search.svg") no-repeat 4.5%;
  input {
    height: 50px;
    font-size: 18px;
    margin-left: 50px;
    width: 383.62px;
    border: none;
    outline: none;
  }
`;

const SearchArea = styled.div`
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: end;
  }
`;

const KeywordSearchButton = styled.button`
  border: none;
  background: none;
  color: #515151;
`;

const Legend = styled.legend`
  visibility: hidden;
  font-size: 0;
`;

const SearchFilterSelectWrap = styled.fieldset`
  display: flex;
  div {
    margin-left: 20px;
  }
`;

const SearchWarp = styled.div`
  box-sizing: border-box;
  width: 1240px;
  height: 120px;
  margin: 20px 0 0;
  padding: 26px 76.1px 24px 0;
  border-radius: 5px;
  border: solid 1px #f1f1f1;
  background-color: #fff;
`;
