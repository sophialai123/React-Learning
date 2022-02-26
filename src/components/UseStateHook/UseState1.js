import React, { useState } from "react";
//https://reactjs.org/docs/hooks-reference.html#usestate

import "./styles.css";


function App() {

  //Create a useState funciton,return an array, [first is a start value, second is a function]
  const [count, setCount] = useState(0);// 0 is initial value from the array

  function increase() {
    setCount(count + 1); // call the setCount funtion
  }

  function decrese() {
    setCount(count - 1);// call the setCount funtion
  }


  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrese}>-</button>
      <button onClick={increase}>+</button>
    </div>

  );

}

export default App;
