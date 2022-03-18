import PersonalizeNav from ".";
import TabListContainer from "../tabs/TabListContainer";
import styled from "@emotion/styled";
const ScrollNavTabs = () => {
  return (
    <ResponsiveView>
      <div className="pt-30">
        <PersonalizeNav />
      </div>
      <TabListContainer />
    </ResponsiveView>
  );
};

const ResponsiveView = styled.div`
  position: fixed;
  top: 68px;
  right: 0;
  left: 0;
  z-index: 100;
  background-image: linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );
  background-color: #fff;
  height: 345px; //101px 274px 345px
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  .pt-30 {
    margin-top: 30px;
  }
`;

export default ScrollNavTabs;
