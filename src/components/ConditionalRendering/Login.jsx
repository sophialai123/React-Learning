import React from "react";
import Input from "./Input";

function Login(){
    return(
        <div>
          <form className="form">

          {/* use my own input props here*/}
          <Input 
          type = "text"
          placeholder="Username"
          />
          
          <Input 
          type = "password"
          placeholder="Password"
          />
       
            <button type="submit">Login</button>
          </form>
        
        
        </div>
    );
}

export default Login;