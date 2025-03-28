import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Navigation from "../components/Navigation.tsx";
import { Image } from "react-bootstrap";

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [postDetail, setPostDettail] = useState({});
  const fetchPost = async () => {
    const { data } = await axios.get("http://localhost:5000/api/postbyid", {
      withCredentials: true,
      params: {
        postId: Number(id),
      },
    });
    const post = data;
    console.log("Post Details - ", post);
    setPostDettail(data.post);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPost,
    staleTime: 60000,
  });

  return (
    <div className="p-3" style={{textAlign : "left"}}>
      <Navigation />
      <div className="row">
        <div  className="col-12">
            
        </div>
        <div className="col-12">
          {postDetail && <h1>{postDetail.Title}</h1>}
        </div>
        <div className="col-12">
          {postDetail && <h3>{postDetail.CaptionText}</h3>}
        </div>
      </div>
      <div className="row">
        <div className="col-8 p-3">
          {postDetail && <Image src={postDetail.Image} fluid />}

          {postDetail && <h5 className="pt-3">{postDetail.Description}</h5>}
        </div>
        <div className="col-4">
            Here goes the Top news
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage;
