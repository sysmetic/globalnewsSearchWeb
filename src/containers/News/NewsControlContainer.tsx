import styled from "@emotion/styled";
import React, { MouseEvent } from "react";
import { album, text } from "../../redux/news/newsformatSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CommonContainer from "../../components/layout/CommonContainer";
import DropDownSort from "../../components/news/DropDownSort";

const NewsControlContainer = () => {
  const test = useAppSelector(state => state.formats);
  const dispatch = useAppDispatch();
  console.log(test, "성공");

  const changeToImgFormat = (event: MouseEvent<HTMLElement>) => {
    dispatch(album());
  };
  const changeToTextFormat = (event: MouseEvent<HTMLElement>) => {
    dispatch(text());
  };

  return (
    <CommonContainer>
      <Features>
        <DropDownSort />
        <TextSizeControl onClick={() => {}} />
        <ImageFormatViewBtn onClick={changeToImgFormat} />
        <TextFormatViewBtn onClick={changeToTextFormat} />
      </Features>
    </CommonContainer>
  );
};

export default NewsControlContainer;

const Features = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #d9d9d9;
`;

const TextSizeControl = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Text-Size.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImageFormatViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Grid-filled.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextFormatViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Grid-list.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;
