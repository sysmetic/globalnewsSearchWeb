import React from "react";
import styled from "@emotion/styled";
import CreditCard from "../../assets/CreditCard.svg"
import Calendar from "../../assets/Calendar.svg"

const CardWrap = styled.div`
  display: block;
  color: #414141;
  margin-right: 37px;
  h5 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`

const Card = styled.div`
  width: 488px;
  height: 247px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  display: inline-block;
  border-radius: 5px;

`
const CardCont = styled.div`
  margin: 31px 0 24px 34px;
  color: #414141;
  letter-spacing: -0.01em;
`
const Credit = styled.div`
  margin-bottom: 18px;
`
const CreditInfo = styled.div`
  display: inline-block;
  margin-left: 11px;
`

const Payments = styled.div`
`
const PaymentInfo = styled.div`
  display: inline-flex;
  margin-left: 11px;
  line-height: 1.5;
  font-size: 16px;
  height: 88px;
`

const CardBtn = styled.div`
  width: 155px;
  height: 37px;
  border-radius: 5px;
  background-color: #48c0b7;
  color: #fff;
  margin-left: 295px;
  line-height: 2.2;
  text-align: center;
`

export const PaymentsCard = () => {
  return (
    <CardWrap>
      <h5>청구 및 결제</h5>
      <Card>
        <CardCont>    
          <Credit>
            <img src={CreditCard} alt="Credit Card Icon"/>
            <CreditInfo>MarsterCard (끝자리: ****1234)</CreditInfo>
          </Credit>
          <Payments>
            <img src={Calendar} alt="Calendar Icon"/>
            <PaymentInfo>₩ 18,000/월<br/>
            다음 결제일 : 2022년 3월 13일<br/>
            연간플랜, 월별 결제</PaymentInfo>
          </Payments>
        </CardCont>
        <CardBtn>청구 및 결제 편집</CardBtn>
      </Card>
    </CardWrap>
  )
}