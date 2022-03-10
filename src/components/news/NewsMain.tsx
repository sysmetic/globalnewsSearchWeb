import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import ImageFormatNews from "./ImageFormatNews";
import TextformatNews from "./TextformatNews";

const NewsMain = () => {
  return (
    <main className="NewsMain">
      <CommonContainer>
        <Inner>
          <ImageFormatNews />
          <ImageFormatNews />
          <ImageFormatNews />
          <ImageFormatNews />
          <ImageFormatNews />
          <TextformatNews />
        </Inner>
      </CommonContainer>
    </main>
  );
};

export default NewsMain;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px 0;
  padding-bottom: 280px;
`;
