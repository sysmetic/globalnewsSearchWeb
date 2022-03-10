import React from "react";
import styled from "@emotion/styled";
import  BookmarkNav  from "./BookmarkNav";
import { Link } from "react-router-dom";

const Bookmark = () => {
  return (
  <Wrap>
    <Container>
      <SideBar>
        <h2>스크랩한 뉴스</h2>
        <SideContainer>
          <BookmarkNav/>
        </SideContainer>
      </SideBar>
      <Content>
        <ContContainer>
          <FilterList>
            <select name="filter">
              <option value="none">정렬순</option>
              <option value="최신순">최신순</option>
              <option value="인기순">인기순</option>
            </select>
          </FilterList>
          <BookmarkList>
            <li>
              <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
              <LogoPress/>
              <PressName>NDTV</PressName>
              <Wtime>3 minutes ago</Wtime>
              <Link to={"/"}>
                <MoreIcon/>
              </Link>
            </li>
            <li>
              <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
              <LogoPress/>
              <PressName>NDTV</PressName>
              <Wtime>3 minutes ago</Wtime>
              <Link to={"/"}>
                <MoreIcon/>
              </Link>
            </li>
            <li>
              <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
              <LogoPress/>
              <PressName>NDTV</PressName>
              <Wtime>3 minutes ago</Wtime>
              <Link to={"/"}>
                <MoreIcon/>
              </Link>
            </li>
            <li>
              <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
              <LogoPress/>
              <PressName>NDTV</PressName>
              <Wtime>3 minutes ago</Wtime>
              <Link to={"/"}>
                <MoreIcon/>
              </Link>
            </li>
            <li>
              <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
              <LogoPress/>
              <PressName>NDTV</PressName>
              <Wtime>3 minutes ago</Wtime>
              <Link to={"/"}>
                <MoreIcon/>
              </Link>
            </li>
            <li>
              <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
              <LogoPress/>
              <PressName>NDTV</PressName>
              <Wtime>3 minutes ago</Wtime>
              <Link to={"/"}>
                <MoreIcon/>
              </Link>
            </li>
            
          </BookmarkList>

          <PageNationItems>
            <span>pages 2 of 10</span>
            <PageNation>
              <PageArrow><Link to={"/"}><DoubleLeftIcon/></Link></PageArrow>
              <PageArrow><Link to={"/"}><LeftIcon/></Link></PageArrow>
              <Pages><Link to={"/"}>1</Link></Pages>
              <Pages><Link to={"/"} className="on">2</Link></Pages>
              <Pages>...</Pages>
              <Pages><Link to={"/"}>10</Link></Pages>
              <PageArrow><Link to={"/"}><RightIcon/></Link></PageArrow>
              <PageArrow><Link to={"/"}><DoubleRightIcon/></Link></PageArrow>
            </PageNation>
          </PageNationItems>
        </ContContainer>
      </Content>
    </Container>
  </Wrap>
  );
}

export default Bookmark;

const Wrap = styled.div`
  background-color: #f9faff;
  height: 120vh;
`;

const Container = styled.div`
  width: 1240px;
  height: 740px;
  margin: 0 auto;
  display: flex;
`

const SideContainer = styled.div`
  background-color: #144056;
  text-align: center;
  border-radius: 5px;
`

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 55px;
`
const SideBar = styled.div`
  float: left;
  h2 {
    margin-top: 85px;
    font-size: 22px;
    font-weight: 600;
    color: #144056;
  }
`
const Content = styled.div`
  background-color: #f9faff;
  height: 1050px;
  width: 1315px;
  float: left;
`
const FilterList = styled.div`
  margin-left: 765px;
  select {
    padding-left: 10px;
    width: 160px;
    height: 40px;
    border: 1px solid #DADADA; 
    border-radius : 3px;
  }

  
`
const BookmarkList = styled.ul`
  margin-top: 52px;
  li {
    position: relative;
    padding: 14px 0 6px 25px;
    font-weight: 300;
    font-size: 14px;
    width: 925px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
    color: #1D1D1D;
    margin-bottom: 11px;
  }
  li + li {
    margin-top: 20px;
  }
  li > div {
    display: inline-block;
  }
  a {
    position: absolute;
    top: 28px;
    right: 49px;
  }
`
const LogoPress = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #B2B2B2;
  margin-bottom: -4px;
`
const PressName = styled.div`
  margin-left: 4px;
  height: 24px;
  line-height: 12px;
`

const Wtime = styled.div`
  margin-left: 30px;
  height: 24px;
  line-height: 12px;
`

const PageNationItems = styled.div`
  display: flex;
  span {
    font-weight: 300;
    font-size: 14px;
    color: #90A4AE;
    line-height: 30px;
    margin-top: 81px;
  }
`
const MoreIcon = styled.div`
  width: 16px;
  height: 4px;
  background: url("../images/More.svg") no-repeat;
  
`

const PageNation = styled.ul`
  margin-top: 51px;
  margin-left: 325px;
  li {
    display: inline-block;
  }
  li:nth-of-type(5){
    width: 24px;
    height: 24px;
  }
`

const Pages = styled.li`
  font-size: 14px;
  color: #9BA3A7;
  line-height: 1.5;
  text-align: center;
  a {
    display: block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    text-decoration: none;
    color: #9BA3A7;
  }
  a.on {
    background-color: #C3EAE7;
    color: #37474F;
  }
`



const DoubleLeftIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("../images/DoubleLeft.svg") no-repeat;
  margin-top: 15px;
`
const DoubleRightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("../images/DoubleRight.svg") no-repeat;
  margin-top: 15px;
`
const LeftIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("../images/Left.svg") no-repeat;
  margin-top: 15px;
`
const RightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("../images/Right.svg") no-repeat;
  margin-top: 15px;
`

const PageArrow = styled.li`
  width: 40px;
  height: 40px;
`