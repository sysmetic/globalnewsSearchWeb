import styled from "@emotion/styled";
import React from "react";

const NewsItem = () => {
  return (
    <Wrap>
      <Inner>
        <Figure>
          <img src="https://placeimg.com/360/300/any" alt="뉴스기사1" />
        </Figure>
        <Feautres>
          <button>번역</button>
          <div>
            <i role="button" className="bookmark"></i>
            <i role="button" className="share"></i>
          </div>
        </Feautres>
        <Title>Mercedes Takes a Big Leap With Its Electric Flagship</Title>
        <ArticleBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
          turpis etiam egestas nibh feugiat. Sed neque dignissim morbi ac
          dignissim odio. Nunc eu fringilla tincidunt iaculis. Turpis in
          pellentesque quis tortor. At laoreet et aliquam consequat tempus.
        </ArticleBody>
        <ArticleFooter>
          <i></i>
          <div className="article-time">3 minutes ago</div>
        </ArticleFooter>
      </Inner>
    </Wrap>
  );
};

export default NewsItem;

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

const Feautres = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 20px 0;
  button {
    width: 70px;
    height: 100%;
    background-color: #4d4d4d;
    color: white;
    border: none;
    outline: none;
  }
  div {
    display: flex;
    .bookmark {
      width: 40px;
      height: 100%;
      background-image: url("/assets/images/icon-Bookmark-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .share {
      width: 40px;
      height: 100%;
      background-image: url("/assets/images/icon-Share-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }
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

const Title = styled.h2`
  font-family: NotoSans-Display;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const ArticleFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-sizing: content-box;
  i {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #c4c4c4;
    border-radius: 50%;
  }
  .article-time {
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.86;
    letter-spacing: normal;
    text-align: left;
    color: #313131;
  }
`;
