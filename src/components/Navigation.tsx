import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/home">Library</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );
}

export default Navigation;
