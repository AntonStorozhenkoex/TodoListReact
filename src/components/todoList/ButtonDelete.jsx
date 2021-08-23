import React from "react";

export const BtnDelete = ({ deleteItem }) => (
  <button className="deleteButton" onClick={deleteItem}>
    X
  </button>
);
