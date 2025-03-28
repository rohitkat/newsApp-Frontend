import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import NewsCard from "../components/NewsCard.tsx";
import NewsCardAdjacent from "../components/NewsCardAdjacent.tsx";
import NewsBanner from "../components/NewsBanner.tsx";

function HomePage(props) {
  const headingList = {
    newsTitle: "In Main Focus",
  };

  const [topNewsPost, setTopNewsPost] = useState([]);
  const [liveNewsPost, setLiveNewsPost] = useState([]);

  const fetchTopNews = async() => {
    const {data} = await axios.get("http://localhost:5000/api/postList", {
      withCredentials: true,
      params: {
        listName: "TopNews",
      },
    });
    const topNews = data;
    console.log("TopNews - ", topNews);

    return data;
  };

  const { data, isLoading, error } = useQuery({
      queryKey: ["topnews"],
      queryFn: fetchTopNews,
      staleTime: 60000,
    });


    const fetchLiveNews = async() => {
      const {data} = await axios.get("http://localhost:5000/api/postList", {
        withCredentials: true,
        params: {
          listName: "LiveNews",
        },
      });
      const liveNews = data;
      console.log("LiveNews - ", liveNews);

      return liveNews;
    };
  
    const { data:liveNews, isLoading: isLoadingLiveNews, error: errorLiveNews } = useQuery({
        queryKey: ["livenews"],
        queryFn: fetchLiveNews,
        staleTime: 60000,
      });


      useEffect(() => {
        const topNewsPostList = data?.postList?.[0];
        setTopNewsPost(topNewsPostList?.postListDetail);
        console.log("Top News Post - ",topNewsPostList?.postListDetail);
      },[data]);

      useEffect(() => {
        const liveNewsPostList = liveNews?.postList?.[0];
        setLiveNewsPost(liveNewsPostList?.postListDetail);
        console.log("Live News Post - ",liveNewsPostList?.postListDetail);
      },[liveNews])

  return (
    <>
      
      <NewsBanner />
      <div className="row">
        <div className="col-8">
          <strong className="mt-4">{headingList.newsTitle}</strong>
          <div className="row row-cols-md-4 row-cols-sm-1 g-4 mx-3">
            {
              topNewsPost && topNewsPost.map(
                postListDetail => (
                  <NewsCard Post={postListDetail.Post} />
                )
              )
            }
     
          </div>
        </div>
        <div className="col-4">
          {
            liveNewsPost ? (
              <strong>Live News</strong>
            ) : (
              <strong>Live News</strong>
            )
          }
          
          <div className="row row-cols-md-1 row-cols-sm-1 g-4 mx-3">
         {
          liveNewsPost ? (
            liveNewsPost.slice(0,3).map(
              postListDetail => (
                <NewsCardAdjacent Post={postListDetail.Post} />
              )
            )
          ) : (
          <p>No News is LIVE!!</p>
        )
         }  
         </div>
          </div>
      </div>
    </>
  );
}

export default HomePage;
