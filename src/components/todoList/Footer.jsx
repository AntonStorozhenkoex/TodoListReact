import React from "react";
import { ButtonFooter } from "./ButtonFooter";

export const Footer = ({ setFilter, filter, fetchData }) => (
  <footer className="footer">
    <ButtonFooter
      title="Clear"
      filter={filter}
      fetchData={fetchData}
      changeFilter={() => {}}
    />
    <ButtonFooter
      title="All"
      filter={filter}
      filterExpValue="all"
      changeFilter={() => setFilter("all")}
    />
    <ButtonFooter
      title="Completed"
      filter={filter}
      filterExpValue="finish"
      changeFilter={() => setFilter("finish")}
    />
    <ButtonFooter
      title="In Progress"
      filter={filter}
      filterExpValue="active"
      changeFilter={() => setFilter("active")}
    />
  </footer>
);
