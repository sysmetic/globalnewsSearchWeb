import React from "react";
import styled from "@emotion/styled";

const Wrap = styled.ul`
color: rgba(255, 255, 255, 0.6);
padding: 0;
  h2 {
    font-size: 22px;
    margin-bottom: 67px;
  }
  li {
    display: flex;
    width: 265px;
    list-style: none;
    font-size: 20px;
    font-weight: 600;
  }
  a {
    height: 59px;
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-left: 21px;
    line-height: 3.5;
  }

  .on {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .on::before {
    content: '';
    border-left: 3px solid #48c0b7;
    margin-left: -3px;
  }

`
const Counts = styled.div`
  width: 42px;
  height: 16px;
  border-radius: 4px;
  border: solid 1px #bac5ca;
  color: #bac5ca;
  font-size: 10px;
  text-align: center;
  line-height: 1.6;
  margin-top: 20px;
  margin-left: 50px;

`

export const BookmarkNav = () => {
  return (
    <Wrap>
      <h2>스크랩한 뉴스</h2>
      <li className="on"><a href="">폴더이름</a><Counts>192개</Counts></li>
      <li><a href="">폴더이름</a><Counts>192개</Counts></li>
      <li><a href="">폴더이름</a><Counts>192개</Counts></li>
    </Wrap>
  )
}