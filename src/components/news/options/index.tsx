import styled from "@emotion/styled";
import React, { MouseEvent } from "react";
import { album, text } from "../../../redux/news/newsformatSlice";
import { useAppDispatch } from "../../../redux/hooks";
import CommonContainer from "../../layout/CommonContainer";
import SortOptions from "./SortOptions";

  const Options = () => {
    
  const dispatch = useAppDispatch();

  function changeToImgFormat(event: MouseEvent<HTMLElement>) {
    dispatch(album());
  }
  function changeToTextFormat(event: MouseEvent<HTMLElement>) {
    dispatch(text());
  }

  return (
    <CommonContainer>
      <Features>
        <SortOptions/>
        <TextSizeControl onClick={() => {}} />
        <ImageFormatViewBtn onClick={changeToImgFormat} />
        <TextFormatViewBtn onClick={changeToTextFormat} />
      </Features>
    </CommonContainer>
  );
};

export default Options;

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
  cursor: pointer;
`;

const ImageFormatViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Grid-filled.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const TextFormatViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Grid-list.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
