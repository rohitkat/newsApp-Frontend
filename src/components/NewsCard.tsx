import React from "react";
import { Link } from "react-router-dom";
import { NewsType } from "../types/newsType";

const NewsCard: React.FC<NewsType> = ({
  designType = "upDown",
  backgroundColor = "#ffffff",
  color = "#000000",
  textOnTop = false,
  edges = "rounded",
  fontStyle = "normal",
  Post,
}) => {
  console.log(Post);
  return (
    <div
      className="col p-2"
      style={designType === "fullLength" ? { height: "100%" } : {}}
    >
      <div
        className="card"
        style={{
          ...(designType === "fullLength" ? { height: "93%" } : {}),
          ...{ backgroundColor: backgroundColor },
        }}
      >
        {Post && <Link to={`/post/${Post.id}`}><img src={Post.Image} className="card-img-top" alt="..." /></Link>}

        <div
          className={textOnTop ? "card-img-overlay" : "card-body"}
          style={{
            ...(fontStyle === "largeHighlight"
              ? { fontSize: "25px", color: "white" }
              : {}),
            ...(textOnTop ? { marginTop: "40%" } : {}),
          }}
        >
          {Post && Post.Category &&
          <strong className="primary">
          <Link to={Post.Category.Url}>{Post.Category.Title}</Link>
        </strong>
          }
          
          <p
            className="card-text"
            style={textOnTop ? { color: "#edf0f3" } : {}}
          >
            {Post && Post.Title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
