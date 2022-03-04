import styled from "@emotion/styled";
import HomeContainer from "../containers/home/HomeContainer";

const Home = () => {
  return (
    <HomeWrap>
      <InnerWrap>
        <HomeContainer />
      </InnerWrap>
    </HomeWrap>
  );
};

export default Home;
const HomeWrap = styled.div`
  background: linear-gradient(
    211.86deg,
    #ffffff -2.13%,
    rgba(244, 253, 251, 0.896614) 19.27%,
    rgba(223, 248, 244, 0.7) 49.34%,
    rgba(253, 221, 210, 0.7) 94.11%
  );
  padding-bottom: 267px;
  height: 100vh;
`;

const InnerWrap = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding-top: 132px;
`;
