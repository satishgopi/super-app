import React, { useEffect, useState } from "react";
import "../assets/css/profile.css";
import profile from "../assets/img/profile-pic.png";

const Profile = () => {
  // form data get
  const [formItems, setFormItems] = useState([]);
  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
      setFormItems(formData);
    }
  }, []);

  // category data get
  const [catItems, setCatItems] = useState([]);
  useEffect(() => {
    const categrayItems = JSON.parse(
      localStorage.getItem("selectedCategories")
    );
    if (categrayItems) {
      setCatItems(categrayItems);
    }
  }, []);

  return (
    <>
      <div className="profile-box">
        <div className="profile-img">
          <img src={profile} alt="" />
        </div>
        <div className="right-content">
          <h1>{formItems.firstName}</h1>
          <h1>{formItems.email}</h1>
          <h2>{formItems.userName}</h2>
          <div>
            <ul className="cat-index-wrapp">
              {catItems.map((item, index) => {
                return (
                  <li key={index}>
                    <div>{item}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
