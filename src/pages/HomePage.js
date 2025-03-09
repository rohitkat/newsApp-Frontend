import React from "react";
import NewsCard from "../components/NewsCard.tsx";
import NewsCardAdjacent from "../components/NewsCardAdjacent";
import NewsBanner from "../components/NewsBanner.tsx";
import SubMenus from "../components/SubMenus.tsx";

function HomePage(props) {
  const headingList = {
    newsTitle: "In Main Focus",
  };
  return (
    <>
      <SubMenus />
      <NewsBanner />
      <div className="row">
        <div className="col-8">
          <strong className="mt-4">{headingList.newsTitle}</strong>
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
          <strong>Adjacent List</strong>
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

export default HomePage;
