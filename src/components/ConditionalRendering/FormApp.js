import React from "react";
import Form from "./Form";

// depends on the value is true or false, the screen will change.
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* create a prop that can be used in the Form.jsx, value is equal to userIsRegistered */}
      <Form
        isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
