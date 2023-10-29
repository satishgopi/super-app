import React, { useEffect, useState } from "react";
import profile from "../../assets/img/profile-pic.png";
import "../Browse/browse.css";
import { Link } from "react-router-dom";

const Browse = () => {
  const URL =
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "8da0dcf2d7mshbe987098f3d6242p19bd90jsn8d09934e7b16",
            "X-RapidAPI-Host":
              "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          },
        };
        const response = await fetch(URL, options);
        const data = await response.text();
        setMovies(data);
        console.log(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [URL]);

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
          <h1>{movies.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Browse;
