import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";

const data = [
  { value: "정렬순", state: true },
  { value: "최신순", state: false },
  { value: "인기 있는", state: false }
];

const ControlerSelect = () => {
  return (
    <SelectWrap>
      <SelectboxInner>
        <div>정렬순</div>
        <i></i>
      </SelectboxInner>
    </SelectWrap>
  );
};

const ControlerSection = () => {
  return (
    <CommonContainer>
      <Features>
        <ControlerSelect />
        <TextSize />
        <ImageViewButton />
        <TextViewButton />
      </Features>
    </CommonContainer>
  );
};

export default ControlerSection;

const Features = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #d9d9d9;
`;

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
    background-image: url("/assets/images/icon-navi-bottom.svg");
    background-size: cover;
    cursor: pointer;
  }
`;

const TextSize = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/assets/images/icon-Text-Size.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImageViewButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/assets/images/icon-Grid-filled.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextViewButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/assets/images/icon-Grid-list.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;
