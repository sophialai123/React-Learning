import React from 'react';
import Login from './Login';
import Input from './Input';



var isLoggedIn = false;


function LoginInput(props) {
  return (


    <div className="container">
      {/* use Conditional (ternary) operator
        Syntax:
        condition ? exprIfTrue : exprIfFalse*/}


      {/* This line means: if isLoggedIn is true, then return <h1>, else return <login> */}
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}


    </div>
  );



}

export default LoginInput;