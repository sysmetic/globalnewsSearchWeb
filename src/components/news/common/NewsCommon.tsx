import React from 'react';
import styled from "@emotion/styled";

export const NewsTitle = () => {
  return (
    <Title>Mercedes Takes a Big Leap With Its Electric Flagship</Title>
  );
};

export const NewsFeatures = () => {
  return (
    <Feautres>
      <button className='translate'>번역</button>
        <div> 
          <i role="button" className="bookmark"></i>
          <i role="button" className="share"></i>
        </div>
    </Feautres>
  );
};

export const AuthorInfo = ()=> {
  return (
    <ArticleFooter>
      <div className='ImageFormatView'>
        <i className='Jounal-mark'></i>
        <div className="article-time">3 minutes ago</div>
      </div>
      <i role="button" className='TextFormatView'></i>
    </ArticleFooter>
  )
} 

const Title = styled.h2`
  font-family: NotoSans-Display;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
`;

//NewsFeatures Style
const Feautres = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 20px 0;
  .translate {
    width: 70px;
    height: 100%;
    background-color: #4d4d4d;
    color: white;
    border: none;
    outline: none;
  }
  div {
    display: flex;
    height:100%;
    .bookmark {
      width: 40px;
      height: 100%;
      background-image: url("/images/icon-Bookmark-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .share {
      width: 40px;
      height: 100%;
      background-image: url("/images/icon-Share-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;

//ArticleFooter Style

const ArticleFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-sizing: content-box;
  .Jounal-mark {
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
  .TextFormatView {
    display: none;
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;


