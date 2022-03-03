import React from "react";
import styled from "@emotion/styled";

const KeywordsWarp = styled.div`
  margin-top: 40px;  
  .on {
    background-color: rgba(72, 192, 183, 0.04);
  }
`

const Keywords = styled.div`
  display: inline-block;
  padding: 0 40px 10px;
  border: solid 1px #48c0b7;
  background-color: #fff;
  border-radius: 5px;
  color: #3b788b;
  font-size: 20px;
  font-weight: 600;
  line-height: 2.4;
  margin-right: 20px;
  
`


export const MyKeyword = () => {
  return (
    <KeywordsWarp>
      <h3>마이키워드</h3>
      <Keywords className="on">accelerators</Keywords>
      <Keywords>accelerators</Keywords>
    </KeywordsWarp>
  )
}