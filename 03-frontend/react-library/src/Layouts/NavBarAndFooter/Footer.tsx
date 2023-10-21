import { Link } from "react-router-dom";
import React from "react";

export const Footer = () => {
  return (
    <div className="main-color mt-4">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
        <p className="col-md-4 mb-0 text-white">© Example Library App, Inc</p>
        <ul className="nav navbar-dark col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/home" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className="nav-link px-2 text-white"
              onClick={() => {
                document.body.scrollTo(0, 0);
              }}
            >
              Search Books
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
