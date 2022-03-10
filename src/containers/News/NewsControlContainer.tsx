import styled from "@emotion/styled";
import { useState } from "react";
import React, { MouseEvent } from "react";
import CommonContainer from "../../components/layout/CommonContainer";
import DropDownSort from "../../components/news/DropDownSort";

const NewsControlContainer = () => {
  return (
    <CommonContainer>
      <Features>
        <DropDownSort />
        <TextSizeControl onClick={() => {}} />
        <ImageFormatViewBtn onClick={() => {}} />
        <TextFormatViewBtn onClick={() => {}} />
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
