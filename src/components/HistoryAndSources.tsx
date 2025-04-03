import React from "react";
import { Link } from 'react-router-dom'
import '../css/HistoryAndSources.css'

function HistoryAndSources() {
  return (
    <div className="pt-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            HISTORY
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            SOURCES
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="p-3">
          <div className="article-history-source">
          <div className="article-timeline-source">
            <div className="article-timeline-item-source">
              <p>Written By</p>
              <p>
                <Link className="article-written-by" to="/Home">Rohit Katoch</Link>
              </p>
              <div className="article-date-source">Mar 30, 2025 12:02</div>
            </div>
          </div>
          </div>
          </div>
          
          
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Sources Tab content
        </div>
      </div>
    </div>
  );
}

export default HistoryAndSources;
