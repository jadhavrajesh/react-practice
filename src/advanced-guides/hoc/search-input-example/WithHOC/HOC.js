import React, { useEffect, useState } from "react";

const HOC = (WrappedComponent, entity) => {
  return function WrapperComponent() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/" + entity
        );
        const json = await response.json();
        setData(json);
      };
      fetchData();
    }, []);

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const filteredData = data.slice(0, 10).filter((item) => {
      if (entity === "users") {
        const { name } = item;
        return name.indexOf(searchTerm) >= 0;
      }
      if (entity === "todos") {
        const { title } = item;
        return title.indexOf(searchTerm) >= 0;
      }
    });

    return (
      <>
        <WrappedComponent data={filteredData}>
          <h1>{entity}</h1>
          <input type="text" value={searchTerm} onChange={handleChange} />
        </WrappedComponent>
      </>
    );
  };
};

export default HOC;
