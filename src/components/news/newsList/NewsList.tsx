import styled from "@emotion/styled";
import CommonContainer from "../../layout/CommonContainer";
import ImageFormatNews from "./ImageFormatNews";
import TextformatNews from "./TextformatNews";
import { useNewsList } from "../hooks/useNewsList";
import dummyData from "../common/dummyData.json";
import { useEffect } from "react";

const NewsList = () => {
  const { newsFormats } = useNewsList();

  useEffect( ()=>{
    
  },[])

  return (
    <CommonContainer>
      <Content>
        {dummyData.map(article => {
          const { title, uuid, description, imageUrls } = article;

          switch (true) {
            case newsFormats === "Image":
              return (
                <ImageFormatNews
                  key={uuid}
                  newsTitle={title}
                  newsContent={description}
                  newsimageUrls={imageUrls}
                />
              );
            case newsFormats === "Text":
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

//데이터를 [0]번째 인덱스만 출력하게해라
