import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard.tsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function NewsBanner() {
  const fetchHeaders = async () => {
    const { data } = await axios.get("http://localhost:5000/api/postList", {
      withCredentials: true,
      params: {
        listName: "Header",
      },
    });
    console.log("Headers - ", data);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["headers"],
    queryFn: fetchHeaders,
    staleTime: 60000,
  });

  const [priority1, setPriority1] = useState(null);
  const [priority2, setPriority2] = useState(null);
  const [priority3, setPriority3] = useState([]);

  useEffect(() => {
    const postList = data?.postList?.[0];

    if (postList?.postListDetail) {
      console.log("Post List Detail -", postList?.postListDetail);
      setPriority1(
        postList?.postListDetail?.find(
          (detail) => Number(detail.Priority) === 1
        )
      );
    }
    if (postList?.postListDetail) {
      setPriority2(
        postList?.postListDetail?.find(
          (detail) => Number(detail.Priority) === 2
        )
      );
    }
    if (postList?.postListDetail) {
      setPriority3(
        postList?.postListDetail?.filter(
          (detail) => Number(detail.Priority) === 3
        )
      );
    }
  }, [data]);

  useEffect(() => {
    console.log("Priority 1:", priority1);
    console.log("Priority 2:", priority2);
    console.log("Priority 3:", priority3);
  }, [priority1, priority2, priority3]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="row bg-primary bg-gradient">
      <div className="col-8">
        {data?.postList ? (
          <strong style={{ color: "white", fontSize: "25px" }}>
            {data.postList[0].Description}
          </strong>
        ) : (
          <p>Description not available</p>
        )}
        {priority1 && priority1?.Post && (
          <NewsCard
            Post={priority1.Post}
            textOnTop={true}
            fontStyle="largeHighlight"
          />
        )}
      </div>
      <div className="col-4">
        <strong style={{ color: "white", fontSize: "25px" }}>
          beyond news.
        </strong>
        {priority2 && priority2?.Post && (
          <NewsCard
            Post={priority2.Post}
            backgroundColor="yellow"
            designType="fullLength"
          />
        )}
      </div>
      <div className="col-12">
        {
          <div className="row row-cols-md-3 row-cols-sm-1 g-4 mx-3">
            {priority3.slice(0,3).map((priority) => (
              <React.Fragment key={priority.id}>
                <NewsCard Post={priority.Post} />
              </React.Fragment>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default NewsBanner;
