import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import ImageFormatNews from "./ImageFormatNews";
import TextformatNews from "./TextformatNews";
import { useAppSelector } from "../../redux/hooks";

const NewsMain = () => {
  const ArticleformatState = useAppSelector(state => state.formats);
  
  return (
    <main className="NewsMain">
      <CommonContainer>
        <Inner>
          {ArticleformatState.value === true ? <ImageFormatNews /> : null}
          {ArticleformatState.value === false ? <TextformatNews /> : null}
        </Inner>
      </CommonContainer>
    </main>
  );
};

export default NewsMain;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px 0;
  padding-bottom: 280px;
`;
