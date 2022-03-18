import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import KeywordItem from "./KeywordItem";
import { useKeywordList } from "../../hooks/useKeywordList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";


const AddKeyword = () => {
  const keywordList = useKeywordList();
   const myKeywords = useAppSelector(
    (state: RootState) => state.keywords
  );

  
  return (
    <Wrap>
      <CommonContainer>
        <KeyWordSearch>
          <input type="text"  placeholder="키워드 검색 "/>
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
    width: 500px;
    margin-right: 24px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #48C0B7;
    padding: 11px 0 10px 16px;
    background-color: rgba(72, 192, 183, 0.05);
  }
  input:focus {
    outline: none;
  }

`

const InstanseSearchDropDown = styled.div`
  width: 519px;
  height: 300px;
  border: 1px solid #ededed;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  right: 0;
  background: #fff;
  position: sticky;
  overflow: scroll;
  border-radius: 5px;

  h3 {
    padding: 10px 23px;
    color: ${({ theme }) => theme.BlueGreenColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }

  div {
    padding: 11px 23px;
    cursor: pointer;
    color: #424242;
    &:hover {
      background: #f0fcfb;
    }
  }
`;

export const KeyWordTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #48C0B7; 
  margin-top: 3px;
`;

const MyKeywordInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 20px;
  padding-top: 16px;
`;
function addKeyword(item: string): any {
  throw new Error("Function not implemented.");
}