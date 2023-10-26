import React from "react";
import Profile from "../../components/Profile";
import "../home/home.css";
import Weather from "../../components/Weather";
import News from "../../components/News";

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
            <h1>All Notes</h1>
          </div>
          <div className="item4">
            <h1>Timer</h1>
          </div>
          <div className="item5">
            <News />
          </div>
        </div>
        <div>
          <button className="browse-btn">Browse</button>
        </div>
      </div>
    </>
  );
};

export default Home;
