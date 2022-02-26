import React from "react";

// use the props that created in Login.jsx
function Input(props) {
  return (
    <input type={props.type}
      placeholder={props.placeholder}
    />);

}


export default Input;