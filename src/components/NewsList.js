import React from "react";
import NewsCard from "./NewsCard";
import NewsCardAdjacent from "./NewsCardAdjacent";

function NewsList(props) {
  console.log(props);
  return (
    <>
      <div className="row">
        <div className="col-8">
          <strong>in Focus.</strong>
          <NewsCard />
        </div>
        <div className="col-4">
          <NewsCard />
        </div>
        <div className="col-12">
        <div className="row row-cols-md-3 row-cols-sm-1 g-4 mx-3">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        
      </div>
        </div>
      </div>

      <div className="row">
      <div className="col-8">
      <strong className="mt-4">{props.newsTitle}</strong>
      <div className="row row-cols-md-4 row-cols-sm-1 g-4 mx-3">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      </div>
      <div className="col-4">
        <strong>Adjacent  List</strong>
        <div className="row row-cols-md-1 row-cols-sm-1 g-4 mx-3">
          <NewsCardAdjacent />
          <NewsCardAdjacent />
          <NewsCardAdjacent />
        </div>
      </div>
      </div>
    </>
  );
}

export default NewsList;
