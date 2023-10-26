import React, { useEffect, useState } from "react";

const Notes = () => {
  const [data, setData] = useState(localStorage.getItem("notesData") || "");
  useEffect(() => {
    localStorage.setItem("notesData", data);
  }, [data]);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <h1>All notes</h1>
      <textarea
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "#f1c75b",
          marginTop: "1rem",
          fontSize: "18px",
          padding: "1rem",
          resize: "none",
        }}
        value={data}
        onChange={handleChange}
        placeholder="type"
        rows={20}
        cols={30}
      ></textarea>
    </>
  );
};

export default Notes;
