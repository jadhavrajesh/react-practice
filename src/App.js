import React, { useContext } from 'react';
import './App.css';
import { MyContext } from './concepts/context/ex1';

function ContextConsumerComponent() {
  const context = useContext(MyContext)
  console.log('using useContext API- context value:', context)

  return (
    <div>      
      <MyContext.Consumer>
        {(context) => {
          console.log('context value:', context);
          return 'In Consumer, The context value is : '+context;
        }}
      </MyContext.Consumer>                  
    </div>
  );
}

function App() {
  const contextValue = 'this is my first context example'
  return (
    <div className="App"> 
      <MyContext.Provider value={contextValue}>     
        <ContextConsumerComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
