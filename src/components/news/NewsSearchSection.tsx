import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";

import KeywordTabList from "./KeywordTabList";

const NewsSearchSection = () => {
  return (
    <section className="NewsSearchSection">
      <Wrap>
        <CommonContainer>
          <KeywordTabList />
        </CommonContainer>
      </Wrap>
    </section>
  );
};

export default NewsSearchSection;

const Wrap = styled.div`
  background-image: linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );
  height: 373px;
`;
