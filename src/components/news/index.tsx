import NewsList from "./newsList";
import PersonalizeNav from "./personalizeNav";
import Options from "./options";
import { useEffect } from "react";

// const acesskey = `AIzaSyB7mJodqmrzqYGqAuT13Pypn5syvtWLRZw`;

const NewsContainer = () => {

  return (
    <>
      <PersonalizeNav />
      <Options />
      <NewsList />
    </>
  );
};

export default NewsContainer;
