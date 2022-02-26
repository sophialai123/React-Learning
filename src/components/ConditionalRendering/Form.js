import React from "react";


// Receive the props that created in App.jsx
function Form(props) {
  return (


    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />


      {/* use Conditional (ternary) operator
      && and opetrator if the condition is true, it will return the expression:
    if isRegistered is false, the confirm password will render, otherwise will  not render. */}
      {props.isRegistered === false && <input type="password" placeholder="Confirm Password"
      />}


      <button type="submit">
        {/* use Conditional (ternary) operator
      Syntax:condition ? exprIfTrue : exprIfFalse , use the prop that create in the App.jsx*/}
        {props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;



{/* use Conditional (ternary) operator
      Syntax:
      condition ? exprIfTrue : exprIfFalse
      && and opetrator if both condition are true*/
}