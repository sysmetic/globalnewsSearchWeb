// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import ImageArticle from "./ImageArticle";
import { useAppSelector } from "./../../../../redux/hooks";
import styled from "@emotion/styled";
import { useAppDispatch } from "./../../../../redux/hooks";
import { fetchNewList } from "../../../../redux/news/newsListSlice";
const ObserverEl = styled.div``;
const ImageArticleList = () => {
  const ObserverRef = useRef(null);
  const { newListData } = useAppSelector(state => state.newsList);
  const dispatch = useAppDispatch();

  const options = {
    threshold: 1.0
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entry, observer) => {
      if (entry[0].intersectionRatio > 0) {
      }
    }, options);
    const Observerloction: any = ObserverRef;
    observer.observe(Observerloction.current);
  }, []);

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
      <ObserverEl ref={ObserverRef} />
    </>
  );
};
export default ImageArticleList;

const ObserverView = styled.div``;
