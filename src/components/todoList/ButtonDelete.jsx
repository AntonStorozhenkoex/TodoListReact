import React from "react";
import "../../index.css";

const BtnDelete = ({ deleteItem }) => {
  return (
    <button className="deleteButton" onClick={deleteItem}>
      X
    </button>
  );
};

export default BtnDelete;
