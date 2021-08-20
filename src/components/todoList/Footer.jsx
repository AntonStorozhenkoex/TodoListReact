import React from "react";
import ButtonFooter from "./ButtonFooter";
import "../../index.css";

const Footer = ({ setTodo, setFilter, filter }) => {
  return (
    <footer className="footer">
      <ButtonFooter title="Clear" filter={filter} onClick={() => setTodo([])} />
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
};

export default Footer;
