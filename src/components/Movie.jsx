import React, { useEffect, useState } from "react";
import "../pages/Browse/browse.css";

const Movie = () => {
  const URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=315420b2f9cd6d07de611785b4999f36";

  const [movieData, setMovieData] = useState([]);
  const fetchMovie = async (apiURL) => {
    const response = await fetch(apiURL);
    const { results } = await response.json();
    setMovieData(results);
  };

  useEffect(() => {
    fetchMovie(URL);
  }, []);
  return (
    <>
      <div className="movie-card-grid">
        {movieData.map((item) => {
          return (
            <>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt=""
                />
                <h1>{item.title}</h1>
              </div>
            </>
          );
        })}
      </div>
      {/* {movieData.map((item) => {
        return (
          <>
            <div>
              <h1>{item.title}</h1>
              <ul>
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </li>
              </ul>
            </div>
          </>
        );
      })} */}
    </>
  );
};

export default Movie;
