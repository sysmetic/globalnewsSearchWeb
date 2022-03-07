import styled from "@emotion/styled";
import { NewsFeatures,AuthorInfo, NewsTitle } from "./common/NewsCommon";

const TextformatNews = () => {
  return (
    <Wrap>
      <NewsFeatures></NewsFeatures>
      <NewsTitle></NewsTitle>
      <AuthorInfo></AuthorInfo>
    </Wrap>
  );
};

export default TextformatNews;

const Wrap = styled.div`
  width: 100%;
`