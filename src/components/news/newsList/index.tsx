import styled from "@emotion/styled";
import CommonContainer from "../../layout/CommonContainer";
import ImageFormatNews from "./ImageFormatNews";
import TextformatNews from "./TextformatNews";
import { useAppSelector } from "../../../redux/hooks";
import dummyData from "../common/dummyData.json";
const NewsList = () => {
  const ArticleformatState = useAppSelector(state => state.formats);

  console.log(dummyData);

  return (
    <CommonContainer>
      <Content>
        {dummyData.map(article => {
          const { title, uuid, description, imageUrls } = article;

          switch (true) {
            case ArticleformatState.NewsFormats === "Image":
              return (
                <ImageFormatNews
                  key={uuid}
                  newsTitle={title}
                  newsContent={description}
                  newsimageUrls={imageUrls}
                />
              );
            case ArticleformatState.NewsFormats === "Text":
              return (
                <TextformatNews newsTitle={title} newsContent={description} />
              );
            default:
              return null;
          }
        })}
      </Content>
    </CommonContainer>
  );
};

export default NewsList;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px 0;
  padding-bottom: 280px;
`;
