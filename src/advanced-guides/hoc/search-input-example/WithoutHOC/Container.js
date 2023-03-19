import React from "react";
import "../index.css";
import TodoList from "./TodoList";
import UsersList from "./UsersList";

const Container = () => {
  return (
    <div className="container">
      <UsersList />
      <TodoList />
    </div>
  );
};

export default Container;
