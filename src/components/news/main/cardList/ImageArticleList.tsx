import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import ImageArticle from "./ImageArticle";


const ImageArticleList = ({ newListData }: any) => {
  // const { ref, inView } = useInView({ threshold: 0.3, rootMargin: '0px 0px 800px 0px' });

  return (
    <>
      {newListData.map((article: any, index: number) => (
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
      {/* <ObserverView ref={ref} /> */}
    </>
  );
};
export default ImageArticleList;

const ObserverView = styled.div``;
