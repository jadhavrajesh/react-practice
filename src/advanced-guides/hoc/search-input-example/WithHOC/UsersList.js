import React from "react";
import HOC from "./HOC";

const UsersList = ({ data, children }) => {
  const renderUsers = data.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return (
    <div>
      {children}
      <ul>{renderUsers}</ul>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");
export default SearchUsers;
