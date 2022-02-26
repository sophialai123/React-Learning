import React, { useState } from "react";
import Button from './Button'
import "bootstrap/dist/css/bootstrap.min.css";
//npm install react-bootstrap bootstrap@5.1.3

function ChangeColor(props) {

  const [activeButton, setActiveButton] = useState(0)

  const button_Data = [
    {
      name: "Name",
      value: "name"
    },
    {
      name: "Class",
      value: "class"
    },
    {
      name: "Age",
      value: "age"
    },
    {
      name: "Subjects",
      value: "subjects"
    },
    {
      name: "School",
      value: "school"
    }
  ];
  return (
    <div>
      {button_Data.map((item, index) => (
        <div key={item.value}>
          <Button
            id={index}
            value={item.value}
            setActiveButton={setActiveButton}
            active={activeButton === index ? true : false}
          />

        </div>
      ))}
    </div>
  );
}

export default ChangeColor;
