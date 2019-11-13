import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { MyContext } from './concepts/context/ex1';

class AppProvider extends Component {
  render() {
    return <MyContext.Provider value='this is my first context example'>
      AppProvider      
    </MyContext.Provider>;
  }
}

function A() {
  return (
    <div style={{ "border": "1px solid red"}}>
      <p>A</p>
      <MyContext.Consumer>
        {(context) => {
          console.log('context:', context);
          return 'Consumer:'+context;
        }}
      </MyContext.Consumer>                  
    </div>
  );
}

function B() {
  return (
    <div style={{"border": "1px solid green"}}>
      <p>B</p>  
      <AppProvider/>     
      <A />
    </div>
  );
}

// function C() {
//   return (
//     <div style={{"border": "1px solid blue"}}>
//       <p>C</p>      
//       <A />           
//     </div>
//   );
// }

function App() {
  return (
    <div className="App"> 
      <B/>
    </div>
  );
}

export default App;
