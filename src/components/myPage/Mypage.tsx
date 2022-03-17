import styled from "@emotion/styled";
import  User  from "./User" 
import  SideNav  from "./SideNav" 
import  MembershipCard  from "./MembershipCard"  
import  PaymentsCard  from "./PaymentsCard"  
import MyKeyword  from "./MyKeyword"  
import Modal from "../edit/Modal";
import EditContainer from "../edit/EditContainer";
import { useState } from "react";

const MyPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
  <Wrap>
    <Container>
      <SideBar>
        <h2>마이페이지</h2>
        <SideContainer>
          <User/>
          <SideNav/>
        </SideContainer>
      </SideBar>
      <Content>
        <ContContainer>
          <ContTop>
            <MembershipCard/>
            <PaymentsCard/>
          </ContTop>
          <MyKeyword/>
          <EditKeywords onClick={handleOpen}>키워드 편집<img src="../images/icon-navi-bottom.svg" alt="키워드 편집" /></EditKeywords>
          <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalBody>
            <EditContainer/>
          </ModalBody>
        </Modal>
        </ContContainer>
      </Content>
    </Container>
  </Wrap>
  );
}

export default MyPage;

const Wrap = styled.div`
  background-color: #f9faff;
`;

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  background-color: #f9faff;
`
const SideContainer = styled.div`
  background-color: #144056;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 81px;
`

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 135px;
`

const ContTop = styled.div`
  display: flex;
  
`
const Content = styled.div`
  background-color: #f9faff;
  width: 975px;
  float: left;
  position: relative;
`

const EditKeywords = styled.button`
  border: 0;
  background-color: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  display: inline;
  color: #7A7A7A;
  position: absolute;
  bottom: 75px;
  right: 0;
  cursor: pointer;
  img {
    transform: rotate(-90deg);
    margin-bottom: -14px;
    margin-left: -10px;
  }
`

const SideBar = styled.div`
  width: 265px;
  margin-top: 85px;
  float: left;
  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #144056;
    margin-bottom: 20px;
  }
`

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;