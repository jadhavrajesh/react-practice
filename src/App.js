import React, { Component } from 'react';
import './App.css';
import { MyContext } from './concepts/context/ex1';

function A() {
  return (
    <div>      
      <MyContext.Consumer>
        {(context) => {
          console.log('context:', context);
          return 'In Consumer, The context value is : '+context;
        }}
      </MyContext.Consumer>                  
    </div>
  );
}

function App() {
  return (
    <div className="App"> 
      <MyContext.Provider value='this is my first context example'>     
        <A />
      </MyContext.Provider>
    </div>
  );
}

export default App;
