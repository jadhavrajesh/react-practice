import React from "react";

const todos = [
  {
    id: 1,
    name: "To do 1",
  },
  {
    id: 2,
    name: "To do 2",
  },
  {
    id: 3,
    name: "To do 3",
  },
];

class HandlingEvents extends React.Component {
  handleClick(e, id) {
    console.log("handleClick called", e, id);
  }

  render() {
    return (
      <>
        <h1>To do list</h1>
        <ul>
          {todos.map(({ name, id }) => {
            return (
              <li key={id}>
                {name}
                {/* using arrow */}
                {/* <button onClick={(e) => this.handleClick(id, e)}>
                  Delete this
                </button> */}
                {/* using bind */}
                <button onClick={this.handleClick.bind(this, id)}>
                  Delete this
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HandlingEvents;
