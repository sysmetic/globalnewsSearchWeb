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
  identifier_type: String;
  identifiers: String;
  time_filter: String;
  categories: String;
  min_cityfalcon_score: Number;
  order_by: String;
  access_token: String;
};

export async function getNewList(payload: SearchPayload): Promise<NewsType[]> {
  let NEWS_API_URL = `https://api.cityfalcon.com/v0.2/stories?identifier_type=${payload.identifier_type}&identifiers=${payload.identifiers}&time_filter=${payload.time_filter}&categories=${payload.categories}&min_cityfalcon_score=${payload.min_cityfalcon_score}&order_by=${payload.order_by}&access_token=ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775`;
  const response = await axios.get(NEWS_API_URL);
  return response.data;
}
