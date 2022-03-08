import styled from "@emotion/styled";

const KeywordTab = () => {
  return (
    <div>
      <Wrap>
        <KeywordItem>Buy Now Pay Later</KeywordItem>
      </Wrap>
    </div>
  );
};

export default KeywordTab;

const Wrap = styled.div`
  height: 100%;
`;

const KeywordItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 19px 30px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.theme.BlueGreenColor};
  color: white;
  border-radius: 5px 0 0 0px;
`;
