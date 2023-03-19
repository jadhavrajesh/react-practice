import React from "react";
import HOC from "./HOC";

const TodoList = ({ data, children }) => {
  const renderTodos = data.map(({ id, title }) => {
    return <li key={id}>{title}</li>;
  });

  return (
    <div>
      {children}
      <ul>{renderTodos}</ul>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");
export default SearchTodos;
