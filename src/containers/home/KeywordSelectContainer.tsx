import KeywordSelect from "../../components/home/KeywordSelect";
import sector from "../../assets/sector.json";
import startup from "../../assets/startup.json";
import category from "../../assets/category.json";
import { useState } from "react";

type sectorKeywordType = {
  [data: string]: string[];
};

type Props = {
  setIdentifiersString: (arg: string) => void;
  searchNews: (str: string) => void;
  setIdentifiers: (arg: string) => void;
};

const KeywordSelectContainer = ({
  setIdentifiersString,
  searchNews,
  setIdentifiers
}: Props) => {
  const [sectorKeyword] = useState<sectorKeywordType>(sector);
  const [selectedKey, setSelectedKey] = useState<string>("A");
  const [selectedSectorList, setSelectedSectorList] = useState<string[]>(
    sectorKeyword[selectedKey]
  );

  const categoryList = Object.keys(sectorKeyword);

  const selectSortKey = (key: string) => {
    setSelectedKey(key);
    setSelectedSectorList(sectorKeyword[selectedKey]);
  };

  return (
    <KeywordSelect
      categoryList={categoryList}
      selectSortKey={selectSortKey}
      selectedSectorList={selectedSectorList}
      startupData={startup.startup}
      categoryData={category.category}
      setIdentifiersString={setIdentifiersString}
      searchNews={searchNews}
      setIdentifiers={setIdentifiers}
    />
  );
};

export default KeywordSelectContainer;
