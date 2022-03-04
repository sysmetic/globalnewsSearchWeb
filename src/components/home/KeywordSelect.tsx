import styled from "@emotion/styled";

const KeywordSelect = () => {
  return (
    <KeywordSelectWrap>
      <KeywordSelectTitles>
        <KeywordTitleItem>Category</KeywordTitleItem>
        <KeywordTitleItem>Sector</KeywordTitleItem>
        <KeywordTitleItem>Startup</KeywordTitleItem>
      </KeywordSelectTitles>
      <KeywordListContainer>
        <SortCategoryList>
          <ul>
            <SortCategoryListItem>
              <span>3</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>5</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
            <SortCategoryListItem>
              <span>B</span>
              <img src="" alt="" />
            </SortCategoryListItem>
          </ul>
        </SortCategoryList>
        <KeywordListWrap>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
          <KeywordListItem>Accelerators</KeywordListItem>
        </KeywordListWrap>
      </KeywordListContainer>
    </KeywordSelectWrap>
  );
};

export default KeywordSelect;

const KeywordSelectWrap = styled.div`
  margin-top: 14px;
  width: 1240px;
  background: #fff;
`;

const KeywordSelectTitles = styled.div`
  height: 59px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #c4c4c4;
`;

const KeywordTitleItem = styled.strong`
  display: block;
  width: 306px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #787878;
  cursor: pointer;
`;

const KeywordListContainer = styled.div`
  width: 100%;
  height: 525px;
  background: #fff;
  display: flex;
`;

const SortCategoryList = styled.div`
  width: 324px;
  overflow-y: scroll;
  ul {
    margin-left: 10px;
  }
`;
const SortCategoryListItem = styled.li`
  /* background: #f0fcfb; */
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  color: #4f4f4f;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
`;
const KeywordListWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  overflow-y: scroll;

  & > p:nth-of-type(1n),
  & > p:nth-of-type(2n) {
    border-right: 1px solid #c4c4c4;
  }

  & > p:nth-of-type(3n) {
    border: none;
  }

  & > p:nth-of-type(6n + 1),
  & > p:nth-of-type(6n + 2),
  & > p:nth-of-type(6n + 3) {
    background-color: #fbfbfb;
  }
`;

const KeywordListItem = styled.p`
  display: flex;
  height: 37px;
  padding-left: 20px;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  color: #4f4f4f;
  cursor: pointer;
`;
