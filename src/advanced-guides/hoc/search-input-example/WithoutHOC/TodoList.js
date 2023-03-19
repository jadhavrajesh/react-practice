import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await data.json();
      setTodos(json);
    };

    fetchTodos();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.indexOf(searchTerm) >= 0;
    })
    .map(({ id, title }) => {
      return <li key={id}>{title}</li>;
    });

  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" onChange={handleChange} />
      <ul>{filteredTodos}</ul>
    </div>
  );
};

export default TodoList;
