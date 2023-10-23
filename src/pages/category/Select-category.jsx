import React, { useState } from "react";
import "../category/category.css";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import CategCloseBtn from "./CategCloseBtn";
import alert from "../../assets/alert-icon.png";
import { useNavigate } from "react-router-dom";

const SelectCategory = () => {
  const categoryCards = [
    {
      id: "1",
      title: "Action",
      value: "Action",
      imgUrl: action,
      bgColor: "#FF5209",
    },
    {
      id: "2",
      title: "Drama",
      value: "Drama",
      imgUrl: drama,
      bgColor: "#D7A4FF",
    },
    {
      id: "3",
      title: "Romance",
      value: "Romance",
      imgUrl: romance,
      bgColor: "#148A08",
    },
    {
      id: "4",
      title: "Thriller",
      value: "Thriller",
      imgUrl: thriller,
      bgColor: "#84C2FF",
    },
    {
      id: "5",
      title: "Western",
      value: "Western",
      imgUrl: western,
      bgColor: "#902500",
    },
    {
      id: "6",
      title: "Horror",
      value: "Horror",
      imgUrl: horror,
      bgColor: "#7358FF",
    },
    {
      id: "7",
      title: "Fantasy",
      value: "Fantasy",
      imgUrl: fantasy,
      bgColor: "#FF4ADE",
    },
    {
      id: "8",
      title: "Music",
      value: "Music",
      imgUrl: music,
      bgColor: "#E61E32",
    },
    {
      id: "9",
      title: "Fiction",
      value: "Fiction",
      imgUrl: fiction,
      bgColor: "#6CD061",
    },
  ];

  const [cateValue, setCateValue] = useState([]);
  const navigate = useNavigate();

  const categorySelect = (itemValue) => {
    const selectedCategory = itemValue.currentTarget.getAttribute("value");

    if (cateValue.includes(itemValue)) {
      setCateValue(cateValue.filter((category) => category !== itemValue));
    } else {
      setCateValue([...cateValue, selectedCategory]);
    }
  };

  const removeCategory = (category) => {
    // Filter out the selected category to remove it
    setCateValue(cateValue.filter((item) => item !== category));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cateValue.length >= 3) {
      localStorage.setItem("selectedCategories", JSON.stringify(cateValue));
      navigate("/browse");
    } else {
      console.log("alert");
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="category-wrapp">
            <div className="left-box">
              <h1>Super app</h1>
              <h2>
                Choose your <br /> entertainment <br /> category
              </h2>
              <ul className="cate-close-btn">
                {cateValue.map((item, index) => {
                  return (
                    <li>
                      <CategCloseBtn
                        key={index}
                        title={item}
                        onClose={removeCategory}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className={cateValue.length >= 3 ? "d-none" : "alert-msg"}>
                <img src={alert} alt="" />
                <p>Minimum 3 category required</p>
              </div>
            </div>
            <div className="right-box">
              <ul className="categ-grid">
                {categoryCards.map((item) => {
                  const isActive = cateValue.includes(item.value);
                  return (
                    <li
                      key={item.id}
                      onClick={categorySelect}
                      value={item.value}
                    >
                      <div
                        className={
                          isActive ? "categ-card active-category" : "categ-card"
                        }
                        style={{ background: `${item.bgColor}` }}
                      >
                        <h1>{item.title}</h1>
                        <img src={item.imgUrl} alt={item.title} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "end", margin: "2rem 1rem" }}>
            <button type="submit" className="next-page-btn">
              Next Page
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SelectCategory;
