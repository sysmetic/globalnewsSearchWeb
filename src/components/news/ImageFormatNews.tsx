import styled from "@emotion/styled";
import { NewsFeatures,AuthorInfo,NewsTitle} from "./common/NewsCommon";


const ImageFormatNews = () => {
  return (
    <Wrap>
      <Inner>
        <Figure>
          <img src="https://placeimg.com/360/300/any" alt="뉴스기사1" />
        </Figure>
        <NewsFeatures/>
        <NewsTitle/>
        <ArticleBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
          turpis etiam egestas nibh feugiat. Sed neque dignissim morbi ac
          dignissim odio. Nunc eu fringilla tincidunt iaculis. Turpis in
          pellentesque quis tortor. At laoreet et aliquam consequat tempus.
        </ArticleBody>
        <AuthorInfo />
      </Inner>
    </Wrap>
  );
};

export default ImageFormatNews;

const Wrap = styled.article`
  width: 400px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;
const Inner = styled.div`
  padding-top: 20px;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
`;
const Figure = styled.figure`
  img {
    width: 360px;
    height: 300px;
    margin: 0;
  }
`;


const ArticleBody = styled.p`
  color: #7a7a7a;
  font-family: NotoSans-Display;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: -0.16px;
`;


