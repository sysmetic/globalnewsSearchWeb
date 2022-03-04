import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import CommonContainer from "./CommonContainer";

const GlobalHeader = () => {
  return (
    <section className="GlobalHeader">
      <CommonContainer>
        <GlobalHeaderInner>
          <Link to="/">
            <Logo />
          </Link>
          <UserInfo>
            <span className="MemberShip-join">지금 멤버십 가입</span>
            <div>
              <i className="profile-icon"></i>
              <span>회원님</span>
              <i className="icon-arrow-bottom"></i>
            </div>
          </UserInfo>
        </GlobalHeaderInner>
      </CommonContainer>
    </section>
  );
};

export default GlobalHeader;

const GlobalHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

const Logo = styled.div`
  width: 62.6px;
  height: 24px;
  background-image: url("images/icon-Moya-logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: #575757;
  .MemberShip-join {
    margin-right: 22px;
    cursor: pointer;
  }
  & > span {
    flex-grow: 0;
    padding: 6px 8px 7px 7px;
    border-radius: 5px;
    border: solid 1px #b5b5b5;
    background-color: #fff;
  }
  div {
    display: flex;
    align-items: center;
    margin-left: 12px;
    .profile-icon {
      width: 16px;
      height: 16px;
      background-image: url("https://placeimg.com/16/16/any");
      background-size: cover;
      margin-right: 12px;
      border-radius: 50%;
      cursor: pointer;
    }
    .icon-arrow-bottom {
      width: 18px;
      height: 18px;
      background-image: url("images/icon-arrow-one-right.svg");
      background-size: cover;
      cursor: pointer;
    }
  }
`;
