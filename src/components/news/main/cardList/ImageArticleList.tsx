import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageArticle from "./ImageArticle";
import { useAppSelector } from "./../../../../redux/hooks";
import styled from "@emotion/styled";

const ImageArticleList = () => {
  const { ref} = useInView({
    threshold: 0.3,
    rootMargin: "0px 0px 400px 0px"
  });
  useEffect( ()=> {
    
  },[])
  const { newListData } = useAppSelector(state => state.newsList);
  console.log(newListData, "이미지 기사 출력");
  return (
    <>
      {newListData.map((article: any, index) => (
        <ImageArticle
          key={`${index}-${article.uuid}`}
          newsTitle={article.title}
          newsLink={article.url}
          newsContent={article.description}
          newsimageUrls={article.imageUrls}
          newsSource={article.source}
          publishTime={article.publishTime}
        />
      ))}
      {<ObserverView ref={ref}></ObserverView>}
    </>
  );
};
export default ImageArticleList;

const ObserverView = styled.div``;
