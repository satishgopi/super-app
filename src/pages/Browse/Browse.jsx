import React from "react";
import profile from "../../assets/img/profile-pic.png";
import "../Browse/browse.css";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <>
      <div className="container">
        <div className="browse-nav">
          <h1>Supper App</h1>
          <Link to="/home">
            <img src={profile} alt="" />
          </Link>
        </div>
        <h1
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            color: "#fff",
            textAlign: "start",
          }}
        >
          Entertainment according to your choice
        </h1>
      </div>
    </>
  );
};

export default Browse;
