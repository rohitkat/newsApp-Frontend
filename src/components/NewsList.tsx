import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewsCard from "./NewsCard.tsx";
import NewsCardAdjacent from "./NewsCardAdjacent.tsx";
import { NewsListType } from "../types/NewsListType";
import { PostType } from "../types/PostType";

const NewsList: React.FC<NewsListType> = ({
  ListName = "TopNews",
  DesignType = "upDown",
  NumberOfRecords = 0,
}) => {
  const [newsList, setNewsList] = useState<PostType[] | []>([]);
  const fetchNews = async () => {
    const { data } = await axios.get("http://localhost:5000/api/postList", {
      withCredentials: true,
      params: {
        listName: ListName,
      },
    });
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [ListName],
    queryFn: fetchNews,
    staleTime: 60000,
  });

  useEffect(() => {
    if(data ){
      const newsPostList = data?.postList?.[0];
      const postList = newsPostList?.postListDetail.map((postDetail) => postDetail.Post);
      setNewsList(postList);
    }
  },[data]);

  return (
    <>
    {
      (newsList &&
      (NumberOfRecords > 0 ? newsList.slice(0, NumberOfRecords) : newsList).map(
    (postListDetail) => {
      const post = {
        ...postListDetail,
      };

      return DesignType === "adjacent" ? (
        <NewsCardAdjacent Post={post} />
      ) : (
        <NewsCard Post={post} />
      );
    }
  ))}
    </>
  );
};

export default NewsList;
