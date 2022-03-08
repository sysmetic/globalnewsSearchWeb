import styled from "@emotion/styled";
import CommonContainer from "../../components/layout/CommonContainer";
import * as React from "react";
import DropDownSort from "../../components/news/DropDownSort";

//뉴스 기능 컴포넌트: 최신,인기,가장 인기있는순, 텍스트 사이즈 조절등

const NewsControlContainer = () => {
  return (
    <CommonContainer>
      <Features>
        <DropDownSort />
        <TextSizeControl />
        <ImageViewBtn />
        <TextViewBtn />
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

const ImageViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Grid-filled.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Grid-list.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;
