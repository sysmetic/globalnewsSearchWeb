import React from "react";
import FormatView from "./cardList/FormatView";
import styled from "@emotion/styled";
import { useNewsSorts } from "../hooks/useNewsSorts";
import { useAppSelector } from "../../../redux/hooks";
const NewsList = () => {
  const { newsSortState, newsCurOption } = useNewsSorts();
  console.log(newsSortState);
  const newListData = useAppSelector(state => state.newsList.newListData);
  console.log(newListData.length);
  return (
    <ViewFilter>
      {(function viewList() {
        if (newListData.length === 0) {
          return (
            <NoneCompnent>
              <div>
                <i className="icon-none"></i>
                <p className="icon-none-text">
                  기준에 맞는 컨텐츠를 찾을 수 없습니다.
                </p>
              </div>
            </NoneCompnent>
          );
        }
        if (newsSortState === "top" && newsCurOption === "정렬순") {
          return <FormatView />;
        } else if (newsSortState === "latest" && newsCurOption === "최신순") {
          return <FormatView />;
        } else if (newsSortState === "populer" && newsCurOption === "인기순") {
          return <FormatView />;
        } else {
          return null;
        }
      })()}
    </ViewFilter>
  );
};

export default NewsList;

const ViewFilter = styled.div`
  min-height: 100vh;
`;
const NoneCompnent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 321px;
  border-bottom: 1px solid #d9d9d9;
  div {
    display: block;

    .icon-none {
      display: block;
      font-size: 0px;
      width: 60px;
      height: 60px;
      background-image: url("/images/icon-none.svg");
      background-size: contain;
      background-repeat: no-repeat;
      margin: auto;
    }
    p.icon-none-text {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      color: #595959;
    }
  }
`;
