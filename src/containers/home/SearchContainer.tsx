import Search from "../../components/home/Search";

type Props = {
  openKeywordList: (arg: boolean) => void;
};
const SearchContainer = ({ openKeywordList }: Props) => {
  return <Search openKeywordList={openKeywordList} />;
};

export default SearchContainer;
