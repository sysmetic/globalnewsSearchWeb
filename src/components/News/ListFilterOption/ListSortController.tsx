import AlignmentDropDown from "../../common/DropDown/AlignmentDropDown";
import { StringParam, useQueryParams } from "use-query-params";
import { useEffect } from "react";
import { fetchNewList } from "../../../redux/news/newsListSlice";
import { useAppDispatch } from "../../../redux/hooks";
const ListSortController = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useQueryParams({
    orderBy: StringParam,
    keyType: StringParam,
    paramValue: StringParam,
    language: StringParam,
    timeFilter: StringParam,
    mediaType: StringParam,
    exchange: StringParam
  });
  const { orderBy, keyType, paramValue } = query;

  useEffect(() => {
    if (keyType !== undefined) {
      dispatch(fetchNewList({ ...query }));
    }
  }, [keyType, orderBy, paramValue, dispatch, query]);

  function sortTopNews() {
    setQuery({
      ...query,
      orderBy: "top"
    });
  }
  function sortLastestNews() {
    setQuery({
      ...query,
      orderBy: "latest"
    });
  }

  function sortPopluarNews() {
    setQuery({
      ...query,
      orderBy: "popular"
    });
  }

  const optionList = [
    { name: "정렬순", method: sortTopNews },
    { name: "최신순", method: sortLastestNews },
    { name: "인기순", method: sortPopluarNews }
  ];
  return (
    <AlignmentDropDown
      currentOption="정렬순"
      optionList={optionList}
    ></AlignmentDropDown>
  );
};
export default ListSortController;
