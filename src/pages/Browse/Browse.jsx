import React from "react";
import profile from "../../assets/img/ic-profile-round.png";
import "../Browse/browse.css";
import { Link } from "react-router-dom";
import Movie from "../../components/Movie";

const Browse = (props) => {
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
        <div>
          <h1
            style={{
              fontSize: "28px",
              textAlign: "start",
              color: "#878787",
              fontFamily: "sans-serif",
              margin: "1.5rem 0 0",
            }}
          >
            Action
          </h1>
          <Movie />
        </div>
      </div>
    </>
  );
};

export default Browse;
