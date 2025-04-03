import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewsCard from "../components/NewsCard.tsx";
import NewsCardAdjacent from "../components/NewsCardAdjacent.tsx";
import NewsBanner from "../components/NewsBanner.tsx";
import NewsList from "../components/NewsList.tsx";

function HomePage(props) {
  const headingList = {
    newsTitle: "In Main Focus",
  };

  return (
    <>
      <NewsBanner />
      <div className="row">
        <div className="col-8">
          <strong className="mt-4">{headingList.newsTitle}</strong>
          <div className="row row-cols-md-4 row-cols-sm-1 g-4 mx-3">
            <NewsList ListName="TopNews" NumberOfRecords={0} />
          </div>
        </div>
        <div className="col-4">
          <strong>Live News</strong>
          <div className="row row-cols-md-1 row-cols-sm-1 g-4 mx-3">
            <NewsList
              ListName="LiveNews"
              NumberOfRecords={3}
              DesignType="adjacent"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
