import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/views/NotFound.scss";

const NotFound = () => {
  return (
    <main className="not-found">
      <h2 className="not-found__title">
        Error 404: <br /> Not Found
      </h2>

      <Link to="/" className="not-found__button">
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;
