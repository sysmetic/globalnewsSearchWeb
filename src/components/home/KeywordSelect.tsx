import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
  categoryList: string[];
  selectSortKey: (arg: string) => void;
  selectedSectorList: string[];
  startupData: string[];
  categoryData: string[];
};

type KeywordTitleItemType = {
  onSelected: boolean;
};

type Title = "Category" | "Sector" | "Startup";

const KeywordSelect = ({
  categoryList,
  selectSortKey,
  selectedSectorList,
  startupData,
  categoryData
}: Props) => {
  const [keywordTitle, setKeywordTitle] = useState<Title>("Sector");

  const keywordTitleList: Title[] = ["Category", "Sector", "Startup"];

  const setTitle = (title: Title) => {
    setKeywordTitle(title);
  };

  return (
    <KeywordSelectWrap>
      <KeywordSelectTitles>
        {keywordTitleList.map(item => {
          return (
            <KeywordTitleItem
              key={item}
              onClick={() => setTitle(item)}
              onSelected={item === keywordTitle}
            >
              {item}
            </KeywordTitleItem>
          );
        })}
      </KeywordSelectTitles>
      {keywordTitle === "Sector" && (
        <KeywordListContainer>
          <CategoryList>
            <ul>
              {categoryList.map(sortKeyItem => (
                <CategoryListItem
                  key={sortKeyItem}
                  onClick={() => selectSortKey(sortKeyItem)}
                >
                  <span>{sortKeyItem}</span>
                  <img src="" alt="" />
                </CategoryListItem>
              ))}
            </ul>
          </CategoryList>
          <KeywordListWrap>
            {selectedSectorList.map(keywordItem => {
              return (
                <KeywordListItem key={keywordItem}>
                  {keywordItem}
                </KeywordListItem>
              );
            })}
          </KeywordListWrap>
        </KeywordListContainer>
      )}
      {keywordTitle === "Startup" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {startupData.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}
      {keywordTitle === "Category" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {categoryData.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}
    </KeywordSelectWrap>
  );
};

export default KeywordSelect;

const StartupKeywordList = styled.div`
  overflow-y: scroll;
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 10px;
    border-top: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;
    grid-gap: 0;

    li {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #c4c4c4;
      border-bottom: 1px solid #c4c4c4;
      text-align: center;
      cursor: pointer;
    }
  }
`;

const KeywordSelectWrap = styled.div`
  margin-top: 14px;
  width: 1240px;
  background: #fff;
`;

const KeywordSelectTitles = styled.div`
  height: 59px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #c4c4c4;
`;

const KeywordTitleItem = styled.strong<KeywordTitleItemType>`
  display: block;
  width: 329px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ onSelected, theme }) =>
    onSelected ? theme.BlueGreenColor : "#787878"};
  border-bottom: ${({ onSelected, theme }) =>
    onSelected ? `4px solid ${theme.BlueGreenColor}` : null};
  cursor: pointer;
`;

const KeywordListContainer = styled.div`
  width: 100%;
  height: 525px;
  background: #fff;
  display: flex;
`;

const CategoryList = styled.div`
  width: 324px;
  overflow-y: scroll;
  ul {
    margin-left: 10px;
  }
`;
const CategoryListItem = styled.li`
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  color: #4f4f4f;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
`;
const KeywordListWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  overflow-y: scroll;

  & > p:nth-of-type(1n),
  & > p:nth-of-type(2n) {
    border-right: 1px solid #c4c4c4;
  }

  & > p:nth-of-type(3n) {
    border: none;
  }

  & > p:nth-of-type(6n + 1),
  & > p:nth-of-type(6n + 2),
  & > p:nth-of-type(6n + 3) {
    background-color: #fbfbfb;
  }
`;

const KeywordListItem = styled.p`
  display: flex;
  height: 37px;
  padding-left: 20px;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  color: #4f4f4f;
  cursor: pointer;
`;
