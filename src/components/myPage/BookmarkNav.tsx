import React from "react";
import { Link } from "react-router-dom"
import styled from "@emotion/styled";

const BookmarkNav = () => { 
  return (
    <Wrap>
      <li className="on"><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <li><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <li><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <li><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <NewFolderBtn><PlusIcon/>새 폴더 추가</NewFolderBtn>
    </Wrap>
  )
}

export default BookmarkNav;

const Wrap = styled.ul`
margin-top: 20px;
padding-bottom: 275px;
color: rgba(255, 255, 255, 0.6);
  
  li {
    display: flex;
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
    position: relative;
  }
  .on::before {
    content: '';
    border-left: 3px solid #48c0b7;
    position: absolute;
    height: 59px;
    left: 0;
    bottom: 0;
  }
  .on div {
    background-color: #48c0b7;
    color: #fff;
    border: #48c0b7;

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
  line-height: 1.5;
  margin-top: 20px;
  margin-left: 50px;

`
const NewFolderBtn = styled.div`
  width: 259px;
  height: 59px;
  padding: 27px 0 10px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #48C0B7;
  line-height: 20px;
`
const PlusIcon = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("../images/Plus.svg") no-repeat;
  margin-right: 8px;
`
