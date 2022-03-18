import styled from "@emotion/styled";
import { useEffect } from "react";
import { useFetchLanguageCode } from "../../hooks/useFetchLanguageCode";
import { useTimeFilter } from "../../hooks/useTimeFilter";
import { useCategories } from "../../hooks/useCategories";
import { SearchTitleType } from "../../api/newsListApi";
import { useSearch } from "./../../hooks/useSearch";
import searchKeyword from "../../assets/csvjson.json";
import { SearchFilterItem } from "../home/SearchFilterItem";
import { SetStateAction, useState } from "react";

type Props = {
  openKeywordList: (arg: boolean) => void;
  setLanguageCode: (arg: string) => void;
  setTimeFilterCode: (arg: string) => void;
  setIdentifiersString: (arg: string) => void;
  setCategoriesCode: (arg: string) => void;
  searchNews: (searchTitle?: SearchTitleType, str?: string) => void;
};
export type FilterItemType = {
  label: string;
  defaultValue: string;
  list: string[];
};

type keyWordEntity = {
  name: string;
  sub_name: string;
  data_type: SearchTitleType;
  exchange: string;
};

const Tickers = ({
  openKeywordList,
  setLanguageCode,
  setTimeFilterCode,
  setIdentifiersString,
  setCategoriesCode,
  searchNews
}: Props) => {

  const [openIndex, setOpen] = useState<null | number>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [inputText, setInputText] = useState(" ");
  const [isOpenInstanseSearch, setIsOpenInstanseSearch] = useState(false);
  const [instanseKeyword, setInstanseKeyword] = useState<Array<keyWordEntity>>(
    []
  );
  const { isOpendKeywordList } = useSearch();
  const languageCode = useFetchLanguageCode();
  const languageName = languageCode.languages.map(obj => obj.name);

  const timeFilterArr = useTimeFilter();
  const timeFilterName = timeFilterArr.map(obj => obj.name);

  const categoriesArr = useCategories();
  const categoriesName = categoriesArr.map(obj => obj.name);

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

  const setLanguage = (langName: string) => {
    const langItem = languageCode.languages.find(
      item => item.name === langName
    );
    if (!langItem) {
      return;
    }
    setLanguageCode(langItem.code);
  };

  const setTimeFilter = (timeName: string) => {
    const timeFilterItem = timeFilterArr.find(item => item.name === timeName);
    if (!timeFilterItem) {
      return;
    }
    setTimeFilterCode(timeFilterItem.time_code);
  };

  const setCategories = (categorieName: string) => {
    const categoriesItem = categoriesArr.find(
      item => item.name === categorieName
    );
    if (!categoriesItem) {
      return;
    }
    setCategoriesCode(categoriesItem.code);
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    setIdentifiersString(inputText);
    if (e.code === "Enter") {
      e.preventDefault();
      searchNews();
    }
  };

  const changeInputText = (value: SetStateAction<string>) => {
    setInputText(value);
  };

  const instanseSearch = () => {
    if (inputText === " " || !inputText) {
      setInstanseKeyword([]);
      setIsOpenInstanseSearch(false);
      return;
    }
    //TODO: any 타입정의 다시해야함
    const keyword: any = searchKeyword.filter(item =>
      item.name.includes(inputText)
    );
    if (!keyword || keyword.length === 0) {
      setIsOpenInstanseSearch(false);
      return;
    }
    setIsOpenInstanseSearch(true);
    setInstanseKeyword(keyword);
  };

  const search = (item: keyWordEntity) => {
    searchNews(item.data_type, item.name);
  };

  return (
    <>
      {isOpenInstanseSearch && (
        <InstanseSearchDropDown>
          <h3>Tickers</h3>
          {instanseKeyword.map(item => (
            <div key={item.name} onClick={() => search(item)}>
              {item.name}
            </div>
          ))}
        </InstanseSearchDropDown>
      )}
    </>
  )
}

export default Tickers;

const InstanseSearchDropDown = styled.div`
  width: 519px;
  height: 300px;
  border: 1px solid #ededed;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  right: 0;
  background: #fff;
  position: absolute;
  overflow: scroll;
  border-radius: 5px;

  h3 {
    padding: 10px 23px;
    color: ${({ theme }) => theme.BlueGreenColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }

  div {
    padding: 11px 23px;
    cursor: pointer;
    color: #424242;
    &:hover {
      background: #f0fcfb;
    }
  }
`;