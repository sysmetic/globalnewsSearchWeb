import axios from "axios";

export type NewsType = {
  additionalData: {};
  assetTags: [];
  category: String;
  cityfalconScore: Number;
  cityfalcon_permalink: String;
  description: String;
  duplicatesCount: Number;
  imageUrls: [];
  lang: String;
  paywall: boolean;
  publishTime: String;
  registrationRequired: boolean;
  searchTags: [];
  source: {};
  title: String;
  url: String;
  uuid: String;
};

type NewsListType = {
  nextPageToken: string;
  stories: NewsType[];
};

export type SearchPayload = {
  identifier_type: "assets" | "tickers" | "full_tickers" | "legal_id";
  identifiers: String;
  time_filter: "mth1" | "m5" | "m15" | "h1" | "h8" | "d1" | "v1";
  categories: String;
  min_cityfalcon_score?: Number;
  order_by: "top" | "latest" | "populer";
  access_token: String;
};

export async function getNewList(identifiers: string) {
  let payload: SearchPayload = {
    identifier_type: "assets",
    identifiers,
    time_filter: "mth1",
    categories: "mp,op",
    min_cityfalcon_score: 0,
    order_by: "top",
    access_token: process.env.REACT_APP_API_ACCESS_TOKEN!
  };
  const NEWS_API_URL = `https://api.cityfalcon.com/v0.2/stories?identifier_type=${payload.identifier_type}&identifiers=${payload.identifiers}&time_filter=${payload.time_filter}&categories=${payload.categories}&min_cityfalcon_score=${payload.min_cityfalcon_score}&order_by=${payload.order_by}&access_token=${payload.access_token}`;
  const response = await axios.get(NEWS_API_URL);
  return response;
}
