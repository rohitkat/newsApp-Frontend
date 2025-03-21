import React from "react";

function NewsCardAdjacent({Post}) {
  return (
    <div className="card mb-4 mt-1" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={Post.Image}
            className="img-fluid rounded-start mt-4"
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{Post.Category.Title}</h5>
            <p className="card-text">
              {Post.CaptionText}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {Post.UpdatedOn}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCardAdjacent;
