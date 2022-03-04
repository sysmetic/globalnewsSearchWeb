import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";

const MainSection = () => {
  return (
    <section>
      <CommonContainer>
        <MainSectionInner></MainSectionInner>
      </CommonContainer>
    </section>
  );
};

export default MainSection;

const MainSectionInner = styled.div`
  border: 1px solid black;
  height: 500px;
  padding-bottom: 198px;
`;
