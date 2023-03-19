import React from "react";
import "../index.css";
import SearchTodos from "./TodoList";
import SearchUsers from "./UsersList";

const Container = () => {
  return (
    <div className="container">
      <SearchUsers />
      <SearchTodos />
    </div>
  );
};

export default Container;
