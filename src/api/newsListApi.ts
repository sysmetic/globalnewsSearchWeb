import axios from "axios";
import { cameltoCababString } from "../utils";

export type NewsType = {
  additionalData: {};
  assetTags: [];
  category: string;
  cityfalconScore: Number;
  cityfalcon_permalink: string;
  description: string;
  duplicatesCount: Number;
  imageUrls: [];
  lang: string;
  paywall: boolean;
  publishTime: string;
  registrationRequired: boolean;
  searchTags: [];
  source: {};
  title: string;
  url: string;
  uuid: string;
};

type NewsListType = {
  nextPageToken: string;
  stories: NewsType[];
};

export type QuarystringType = {
  identifier_type: "assets" | "tickers" | "full_tickers" | "legal_id";
  identifiers: string;
  time_filter: string;
  categories: string;
  min_cityfalcon_score?: Number;
  languages: string;
  order_by: "top" | "latest" | "populer";
  access_token: string;
};

export type SearchPayload = {
  searchTitle?: SearchTitleType;
  identifiers: string;
  language: string;
  timeFilter: string;
  categories: string;
};

export type SearchTitleType =
  | "Category"
  | "Sector"
  | "Startup"
  | "tikers"
  | "index"
  | "commodities"
  | "events"
  | "topics";

export async function getNewList(searchPayload: SearchPayload) {
  let payload: QuarystringType = {
    identifier_type: "assets",
    identifiers: searchPayload.identifiers,
    time_filter: searchPayload.timeFilter,
    categories: searchPayload.categories,
    min_cityfalcon_score: 0,
    languages: searchPayload.language,
    order_by: "top",
    access_token:
      "ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775"
  };

  const sectorParams = {
    sector_categories: cameltoCababString(payload.identifiers),
    time_filter: payload.time_filter,
    categories: payload.categories,
    languages: payload.languages,
    order_by: "top",
    access_token: payload.access_token
  };

  const params = {
    identifier_type: payload.identifier_type,
    identifiers: payload.identifiers,
    time_filter: payload.time_filter,
    categories: payload.categories,
    languages: payload.languages,
    min_cityfalcon_score: 0,
    order_by: "top",
    access_token: payload.access_token
  };

  const NEWS_API_URL = "https://api.cityfalcon.com/v0.2/stories?";
  function setParams() {
    if (searchPayload.searchTitle === "Sector") {
      return sectorParams;
    } else {
      return params;
    }
  }
  const response = await axios.get(NEWS_API_URL, {
    params: setParams()
  });

  console.log(response);
  return response;
}
