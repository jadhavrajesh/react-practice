import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await data.json();
      setUsers(json);
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users
    .filter(({ name }) => {
      return name.indexOf(searchTerm) >= 0;
    })
    .map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });

  return (
    <div>
      <h1>UsersList</h1>
      <input type="text" onChange={handleChange} />
      <ul>{filteredUsers}</ul>
    </div>
  );
};

export default UsersList;
