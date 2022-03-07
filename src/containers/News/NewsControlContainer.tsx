import styled from "@emotion/styled";
import CommonContainer from "../../components/layout/CommonContainer";

//뉴스 기능 컴포넌트: 최신,인기,가장 인기있는순, 텍스트 사이즈 조절등 

// const data = [
//   { value: "정렬순", state: true },
//   { value: "최신순", state: false },
//   { value: "인기 있는", state: false }
// ];

const NewsRankSort = () => {
  return (
    <SelectWrap>
      <SelectboxInner>
        <div>정렬순</div>
        <i></i>
      </SelectboxInner>
    </SelectWrap>
  );
};

const NewsControlContainer = () => {
  return (
    <CommonContainer>
      <Features>
        <NewsRankSort />
        <TextSizeControl />
        <ImageViewBtn />
        <TextViewBtn />
      </Features>
    </CommonContainer>
  );
};

export default NewsControlContainer;

const SelectWrap = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #dadada;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 20px;
`;
const SelectboxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  i {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
    cursor: pointer;
  }
`;

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
