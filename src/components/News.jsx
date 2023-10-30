import React, { useEffect, useState } from "react";
import "../assets/css/news.css";

const URL =
  "https://newsapi.org/v2/everything?q=apple&from=2023-10-25&to=2023-10-25&sortBy=popularity&apiKey=492e87a719de41cd848b24f423a6040d";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const random = Math.floor(Math.random() * 100) + 1;

  const fetchNewsData = async (apiUrl) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setNewsData(data.articles[random]);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong, pls try again",
      });
    }
  };
  useEffect(() => {
    fetchNewsData(URL);
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError?.status) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{isError?.msg}</h3>
      </div>
    );
  }
  return (
    <>
      <div className="news-box">
        <div className="news-img-box">
          <img src={newsData.urlToImage} alt={newsData.title} />
          <div className="title">
            <h1>{newsData.title}</h1>
            <p>{newsData.publishedAt}</p>
          </div>
        </div>
        <div className="news-des">
          <p>{newsData.description}</p>
        </div>
      </div>
    </>
  );
};

export default News;
