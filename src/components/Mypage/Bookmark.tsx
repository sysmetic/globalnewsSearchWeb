import React from "react";
import styled from "@emotion/styled";
import reset from "../../styles/global"
import {BookmarkNav} from "./BookmarkNav" 
import {MembershipCard} from "./MembershipCard"  
import {MyKeyword} from "./MyKeyword"  

const Wrap = styled.div`
  background-color: #f9faff;
  width: 1920px;
  margin: 0 auto;
`;
const SideContainer = styled.div`
  margin: 78px 62px 0 340px;
`

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 175px;
`

const ContTop = styled.div`
  display: flex;
`
const SideBar = styled.div`
  width: 605px;
  height: 1050px;
  background-color: #144056;
  float: left;
`
const Content = styled.div`
  background-color: #f9faff;
  height: 1050px;
  width: 1315px;
  float: left;
`
const Bookmark = () => {
  return (
  <Wrap>
    <SideBar>
      <SideContainer>
        <BookmarkNav/>
      </SideContainer>
    </SideBar>
    <Content>
      <ContContainer>
        <ContTop>
          <MembershipCard/>
          <MembershipCard/>
        </ContTop>
        <MyKeyword/>
      </ContContainer>
    </Content>
  </Wrap>
  );
}

export default Bookmark;