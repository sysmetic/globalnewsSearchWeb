import styled from "@emotion/styled";
import { useState } from "react";
import { category, sectorKey, startup } from "../../utils/master";
import { Master } from "./InstanseKeyword";

type Props = {
  searchNews: (
    keyType: string,
    keyParam: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

type Title = "Category" | "Sector" | "Startup";

const KeywordSelect = ({ searchNews }: Props) => {
  const [keywordTitle, setKeywordTitle] = useState<Title>("Category");
  const keywordTitleList: Title[] = ["Category", "Sector", "Startup"];
  const [selectedKey, setSelectedKey] = useState<string>("A");

  const sectorKeys = Object.keys(sectorKey).sort();

  const setTitle = (title: Title) => {
    setKeywordTitle(title);
  };

  const fetchNewsApi = (searchObj: Master, keyType: string) => {
    console.log(searchObj, keyType);
    if (!searchObj.exchange) {
      searchNews(keyType, searchObj.paramValue);
    } else {
      searchNews(keyType, searchObj.paramValue, searchObj.exchange);
    }
  };

  const selectSortKey = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <KeywordSelectWrap>
      <KeywordSelectTitles>
        {keywordTitleList.map(item => (
          <KeywordTitleItem
            key={item}
            onClick={() => setTitle(item)}
            selected={item === keywordTitle}
          >
            {item}
          </KeywordTitleItem>
        ))}
      </KeywordSelectTitles>

      {keywordTitle === "Sector" && (
        <KeywordListContainer>
          <CategoryList>
            <ul>
              {sectorKeys.map(sortKeyItem => (
                <CategoryListItem
                  key={`Sector-${sortKeyItem}`}
                  onClick={() => selectSortKey(sortKeyItem)}
                >
                  <span>{sortKeyItem}</span>
                  <img
                    src="/images/keyword-arrow.svg"
                    alt="섹터 탭 키워드 정렬 화살표"
                  />
                </CategoryListItem>
              ))}
            </ul>
          </CategoryList>

          <KeywordListWrap>
            {sectorKey[selectedKey].map((item: Master, index: number) => (
              <KeywordListItem
                key={`Sector-${item}-${index}`}
                onClick={() => {
                  fetchNewsApi(item, "sectors");
                }}
              >
                {item.name}
              </KeywordListItem>
            ))}
          </KeywordListWrap>
        </KeywordListContainer>
      )}

      {keywordTitle === "Startup" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {startup.map(item => (
                <li
                  key={`Startup-${item.paramValue}`}
                  onClick={() => {
                    fetchNewsApi(item, "startup");
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}

      {keywordTitle === "Category" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {category.map(item => (
                <li
                  key={`Category-${item.paramValue}`}
                  onClick={() => {
                    fetchNewsApi(item, "category");
                  }}
                >
                  {item.name}
                </li>
              ))}
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
    grid-gap: 0;

    li {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
    }
    & > li:nth-of-type(12n + 1),
    & > li:nth-of-type(12n + 2),
    & > li:nth-of-type(12n + 3),
    & > li:nth-of-type(12n + 4),
    & > li:nth-of-type(12n + 5),
    & > li:nth-of-type(12n + 6) {
      background-color: #fbfbfb;
    }
    li:hover {
      background: #f0fcfb;
    }
  }
`;

const KeywordSelectWrap = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 14px;
  background: #fff;
  border-radius: 0px 0px 5px 5px;
`;

const KeywordSelectTitles = styled.div`
  height: 59px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #c4c4c4;
`;

type KeywordTitleItemType = {
  selected: boolean;
};

const KeywordTitleItem = styled.strong<KeywordTitleItemType>`
  display: block;
  width: 329px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected ? theme.BlueGreenColor : "#787878"};
  border-bottom: ${({ selected, theme }) =>
    selected ? `4px solid ${theme.BlueGreenColor}` : null};
  transition: all 0.2s ease;
`;

const KeywordListContainer = styled.div`
  width: 100%;
  height: 450px;
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
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: #4f4f4f;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  transition: all 0.2s ease;
  img {
    padding-bottom: 3px;
    display: none;
  }
  &:hover {
    background: #f0fcfb;
  }
  &:hover img {
    display: block;
  }
`;

export const KeywordListWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  overflow-y: scroll;

  & > p:nth-of-type(3n) {
    border: none;
  }

  & > p:nth-of-type(6n + 1),
  & > p:nth-of-type(6n + 2),
  & > p:nth-of-type(6n + 3) {
    background-color: #fbfbfb;
  }
  & > p:hover {
    background: #f0fcfb;
  }
`;

const KeywordListItem = styled.p`
  display: flex;
  height: 37px;
  padding-left: 20px;
  align-items: center;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #4f4f4f;
  cursor: pointer;
`;
function addKeyword(item: string): any {
  throw new Error("Function not implemented.");
}
