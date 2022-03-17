import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { useKeywordList } from "../../hooks/useKeywordList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { RootState } from "../../redux/store";

const AddKeyword = () => {
  const keywordList = useKeywordList();
  const myKeywords = useAppSelector(
    (state: RootState) => state.keywords
  );
  console.log(myKeywords);

  return (
    <Wrap>
      <CommonContainer>
        <KeyWordSearch>
          <input placeholder="키워드 검색 "/> 
        </KeyWordSearch>
        <KeyWordTitle>My Keyword</KeyWordTitle>
        <MyKeywordInner>
          {myKeywords.map(item => (
            <KeywordItem key={`mykeyword-${item.data}`} item={item.data}/>
          ))}
        </MyKeywordInner>
      </CommonContainer>
    </Wrap>
  )
}

export default AddKeyword;

const Wrap = styled.div`
  margin-top: 16px;
`;

const KeyWordSearch = styled.div`

  input::placeholder {color:#48C0B7;}
  input::-webkit-input-placeholder {color:#48C0B7;}
  input:-ms-input-placeholder {color:#48C0B7;}
  
  textarea::placeholder {color:#48C0B7;}
  textarea::-webkit-input-placeholder {color:#48C0B7;}
  textarea:-ms-input-placeholder {color:#48C0B7;}
  padding-bottom: 16px;
  border-bottom: 1px solid #C4C4C4;
  input {
    border: 1px solid #48C0B7;
    width: 525px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #48C0B7;
    padding: 11px 0 10px 16px;
    background-color: rgba(72, 192, 183, 0.05);
  }
`
export const KeyWordTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #48C0B7; 
  margin-top: 3px;
`;

const MyKeywordInner = styled.div`
  display: flex;
  gap: 0 10px;
  box-sizing: border-box;
  margin-right: 10px;
  padding-top: 16px;
`;
