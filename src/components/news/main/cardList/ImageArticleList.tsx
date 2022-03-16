import React from "react";
import { Key } from "react";
import ImageArticle from "./ImageArticle";
import { useAppSelector } from "./../../../../redux/hooks";

// interface Props {
//   uuid: Key | null | undefined;
//   title: string;
//   description: string;
//   imageUrls: string[] | null;
// publishTime
// }

// source:
// brandName: "Seeking Alpha"
// imageUrl: "https://pstorage.cityfalcon.com/autotweetmedia/domains/logos/79/small.png"
// imageUrls:
// large: "https://pstorage.cityfalcon.com/autotweetmedia/domains/logos/79/large.png"
// medium: "https://pstorage.cityfalcon.com/autotweetmedia/domains/logos/79/medium.png"
// small: "https://pstorage.cityfalcon.com/autotweetmedia/domains/logos/79/small.png"
// thumb: "https://pstorage.cityfalcon.com/autotweetmedia/domains/logos/79/thumb.png"
// [[Prototype]]: Object
// name: "seekingalpha.com"
// [[Prototype]]: Object
// title: "Agilent Technologies Non-GAAP EPS of $1.21 beats by $0.03, revenue of $1.67B beats by $10M"
// url: "https://seekingalpha.com/news/3802874-agilent-and-nbsp-technologies-non-gaap-eps-of-1_21-beats-0_03-revenue-of-1_67b-beats-10m?utm_campaign=cityfalcon&utm_medium=cityfalcon&utm_source=cityfalcon"
// uuid: "37c03184-487a-453f-91d3-4f00cf75190e"

const ImageArticleList = () => {
  const { newListData } = useAppSelector(state => state.newsList);
  console.log(newListData, "이미지 기사 출력");
  return (
    <>
      {newListData.map((article: any, index) => (
        <ImageArticle
          key={article.index}
          newsTitle={article.title}
          newsLink={article.url}
          newsContent={article.description}
          newsimageUrls={article.imageUrls}
          newsSource={article.source}
          publishTime={article.publishTime}
        />
      ))}
    </>
  );
};
export default ImageArticleList;
