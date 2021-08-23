import React from "react";
import { deleteAllItems } from "../../services";

export const ButtonFooter = ({
  changeFilter,
  title,
  filter,
  filterExpValue,
  fetchData,
}) => (
  <button
    className={filterExpValue === filter ? "selectedButton" : "footerButton"}
    onClick={() => {
      changeFilter();
      if (title === "Clear") {
        deleteAllItems().then(fetchData);
      }
    }}
  >
    {title}
  </button>
);
