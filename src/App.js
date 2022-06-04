import React, { useContext } from 'react';
import './App.css';
import UseReducer from './concepts/hooks/UseReducer';
import UseRef from './concepts/hooks/UseRef';
import CompA from './concepts/context/CompA';
import UseEffect from './concepts/hooks/UseEffect';
import UseEffectWithCleanup from './concepts/hooks/UseEffectWithCleanup';
import UseEffectWithAPIcall from './concepts/hooks/useEffectWithAPIcall';

function App() {  
  return (
    <div className="App"> 
      {/* <UseReducer/> */}      

      {/* <UseRef/> */}

      {/* <CompA/> */}

      {/* <UseEffect /> */}

      {/* <UseEffectWithCleanup/> */}

      <UseEffectWithAPIcall/>
    </div>
  );
}

export default App;
