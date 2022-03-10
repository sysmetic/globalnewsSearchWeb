import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

async function Page(curPage: number, totalRowCount: number) {
  let page_size: number = 5;
  let page_list_size: number= 5;
  let no: number = 0;

  curPage = Number(curPage)

  if (curPage <= 0) {
    no = 0;
    curPage = 1;
  }

  else no = (curPage - 1) * page_size;


  if (totalRowCount <0) totalRowCount = 0;
  let totalPage = Math.ceil(totalRowCount / page_size);
  if (totalPage < curPage) {
    no = 0;
    curPage = 1;
  }

  let startPage = ((curPage - 1) * page_list_size) + 1;
  let endPage = (startPage + page_list_size) - 1;

  let result = {
    "curPage": curPage,
    "page_list_size": page_list_size,
    "page_size": page_size,
    "totalPage": totalPage,
    "startPage": startPage,
    "endPage": endPage,
    "no": no
  }
  return result;
}
export default Page;

