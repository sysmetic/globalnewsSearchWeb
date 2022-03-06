import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import NewsItem from "./NewsItem";

const NewsMain = () => {
  return (
    <main className="NewsMain">
      <CommonContainer>
        <Inner>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
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
  border: 1px solid black;
  gap:20px 0;
  padding-bottom: 280px;
`;
