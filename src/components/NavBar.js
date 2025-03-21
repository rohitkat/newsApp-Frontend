import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import SubMenus from "./SubMenus.tsx";

function NavBar() {
  const fetchMenus = async () => {
    const { data } = await axios.get("http://localhost:5000/api/menus", {
      withCredentials: true,
    });
    console.log("Menus-", data);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenus,
    staleTime: 60000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bright Digest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {data.menus
                .filter(
                  (menu) =>
                    menu.ParentCategoryId == 0 && menu.IsCustomCategory == false
                )
                .map((parentMenu) => {
                  return (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={parentMenu.Url}
                      >
                        {parentMenu.Title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <SubMenus menus={data.menus} />
    </div>
  );
}

export default NavBar;
