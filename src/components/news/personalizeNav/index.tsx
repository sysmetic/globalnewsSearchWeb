import styled from "@emotion/styled";
import CommonContainer from "../../layout/CommonContainer";
import NewsTabList from "./NewsTabList";
import KeywordSearchForm from "../../../containers/home/SearchContainer";

const PersonalizeNav = () => {
  return (
    <Wrap>
      <CommonContainer>
        <Inner>
          <div className="pt-31">
            <KeywordSearchForm />
          </div>
          <NewsTabList />
        </Inner>
      </CommonContainer>
    </Wrap>
  );
};

export default PersonalizeNav;

const Wrap = styled.section`
  background-image: linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );
  height: 345px;
`;
const Inner = styled.div`
  .pt-31 {
    padding-top: 31px;
  }
`;
