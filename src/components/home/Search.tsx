import styled from "@emotion/styled";
import { SearchFilterItem } from "./SearchFilterItem";
import { useState } from "react";
import { useEffect } from "react";

export type filterItem = {
  label: string;
  defaultValue: string;
  list: string[];
};

type Props = {
  openKeywordList: (arg: boolean) => void;
};

const Search = ({ openKeywordList }: Props) => {
  const [openIndex, setOpen] = useState<null | number>(null);
  const filterListArr: Array<filterItem> = [
    {
      label: "언론사",
      defaultValue: "언론사이름",
      list: []
    },
    {
      label: "발행일",
      defaultValue: "5분",
      list: ["5분", "15분", "1시간", "하루", "1주일", "한달"]
    },
    {
      label: "언어",
      defaultValue: "영어",
      list: ["영어", "한국어", "일본어", "중국어", "덴마크어", "그리스어"]
    },
    {
      label: "새로고침 속도",
      defaultValue: "10초",
      list: ["10초", "30초", "1분", "10분", "새로고침 없음"]
    }
  ];

  const openFilterList = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setOpen(index);
  };

  const closeAll = () => {
    setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  return (
    <SearchArea>
      <div>
        <KeywordSearchButton>키워드 전체보기</KeywordSearchButton>
      </div>
      <SearchWarp>
        <form>
          <SearchFilterSelectWrap>
            <Legend>뉴스 키워드 검색</Legend>
            {filterListArr.map((item, index) => {
              return (
                <SearchFilterItem
                  key={item.label}
                  filterItem={item}
                  index={index}
                  isOpen={openIndex === index}
                  openFilterList={openFilterList}
                />
              );
            })}
            <SearchBox>
              <input
                type="text"
                onFocus={() => {
                  openKeywordList(true);
                }}
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

const SearchBox = styled.div`
  margin-left: 28px;
  display: flex;
  align-items: center;
  background: url("images/search.svg") no-repeat 4.5%;
  input {
    height: 50px;
    font-size: 18px;
    margin-left: 50px;
    width: 383.62px;
    border: none;
    outline: none;
  }
`;
