import React from "react";
import Profile from "../../components/Profile";
import "../home/home.css";
import Weather from "../../components/Weather";
import News from "../../components/News";
import Notes from "../../components/Notes";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-page-grid">
          <div className="item1">
            <Profile />
          </div>
          <div className="item2">
            <Weather />
          </div>
          <div className="item3">
            <Notes />
          </div>
          <div className="item4">
            <h1>Timer</h1>
          </div>
          <div className="item5">
            <News className="item5" />
          </div>
        </div>
        <div style={{ textAlign: "end", marginBottom: "2rem" }}>
          <NavLink to="/browse">
            <button className="browse-btn">Browse</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
