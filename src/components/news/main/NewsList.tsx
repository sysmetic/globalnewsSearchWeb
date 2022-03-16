import React from "react";
import FormatView from "./cardList/FormatView";
import styled from "@emotion/styled";
import { useNewsFilter } from "./../hooks/useNewsFilter";

const NewsList = () => {
  const { newsSortState } = useNewsFilter();

  // useEffect( ()=>{
  //   if(newsSorts === 인기순 쿼리) {
  //     dispatch()
  //   }
  // },[])

  return (
    <ViewFilter>
      {(function viewList() {
        if (newsSortState === "top") {
          return <FormatView />;
        } else if (newsSortState === "latest") {
          return <FormatView />;
        } else if (newsSortState === "populer") {
          return <FormatView />;
        } else {
          return null;
        }
      })()}
    </ViewFilter>
  );
};

export default NewsList;

const ViewFilter = styled.div``;
