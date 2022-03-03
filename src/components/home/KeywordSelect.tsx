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
          </ul>
        </SortCategoryList>
        <KeywordListWrap>
          <ul>
            <KeywordListItem>Accelerators</KeywordListItem>
          </ul>
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
`;

const KeywordListContainer = styled.div`
  width: 100%;
  height: 525px;
  background: #fff;
  display: flex;
`;

const SortCategoryList = styled.div`
  width: 304px;
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
`;
const KeywordListWrap = styled.div``;

const KeywordListItem = styled.li`
  display: flex;
  align-items: center;
`;
