import React from "react";

const CategCloseBtn = (props) => {
  const categHandleClose = (e) => {
    props.onClose(props.title);
  };
  return (
    <>
      <div className="categ-close">
        {props.title}
        <span onClick={categHandleClose}>X</span>
      </div>
    </>
  );
};

export default CategCloseBtn;
