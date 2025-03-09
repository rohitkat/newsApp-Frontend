import React from "react";

function NewsCardAdjacent() {
  return (
    <div className="card mb-4" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={process.env.PUBLIC_URL + "/images/news-adjacent.webp"}
            className="img-fluid rounded-start mt-4"
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCardAdjacent;
