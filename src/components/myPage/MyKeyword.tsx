import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const MyKeyword = () => {
  return (
    <KeywordsWarp>
      <h3>마이키워드</h3>
      <Keywords className="on">accelerators</Keywords>
      <Keywords>Social Media Marketing & Advertising</Keywords>
      <Link to={"/"}><h4>키워드 편집<RightIcon/></h4></Link>
    </KeywordsWarp>
  )
}

export default MyKeyword;

const KeywordsWarp = styled.div`
  position: relative;
  margin-top: 40px;  
  .on {
    background-color: rgba(72, 192, 183, 0.04);
  }
  h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
    
  }
  h4{
    font-size: 16px;
    font-weight: 500;
    color: #90A4AE;
    position: absolute;
    top: 0;
    right: 0;
  }
`

const Keywords = styled.div`
  display: inline-block;
  padding: 12px 40px 16px;
  border: solid 1px #48c0b7;
  background-color: #fff;
  border-radius: 5px;
  color: #3b788b;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-right: 20px;
  
`
const RightIcon = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-bottom: -12px;
  background: url("../images/Right.svg") no-repeat;
`