import React, { useContext, useCallback, useState } from 'react';
import './App.css';

import { MyContext } from './concepts/context/ex1';


import ReactMemoExample from './reactApi/reactMemo/ex1/';

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
  console.log('renderApp');
  
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => setCount(count + 1));

  // const doSomething = (a, b)=> a + b ;

  // const memoizedCallback = useCallback(
  //   (a, b) => {
  //     console.log(doSomething(a, b));
  //   },
  //   [2,3],
  // );

  return (
    <div className="App"> 
      {/* <MyContext.Provider value={contextValue}>     
        <ContextConsumerComponent />
      </MyContext.Provider> */}

      <ReactMemoExample text='This is React Memoization Example' clickHandler={memoizedCallback}/>
    </div>
  );
}

export default App;
