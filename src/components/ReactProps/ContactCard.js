import React from "react";
import Card from "./Card";
import contacts from "./contacts"
import "./styles.css";


// can only adding className inside of HTML of function.

//create a function and pass it inside of map()function
function creatCard(contact) {
  return (
    <Card
      //Each child in a list should have a unique "key" prop
      key={contact.id} // id is an unique key in array and cannot be use as a props.
      id={contact.id}  // this is id is a prop
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}
// use card properties, to create different cards.
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* access the information from contacts array
      use map(function)*/}
      {contacts.map(creatCard)}


      {/* use a nomal way:
      <Card
      
      name={contacts[0].name} 
      img={contacts[0].imgURL} 
      tel={contacts[0].phone}
      email={contacts[0].email}
      />

      <Card
      name={contacts[1].name} 
      img={contacts[1].imgURL} 
      tel={contacts[1].phone}
      email={contacts[1].email}
      />


      <Card
      name={contacts[2].name} 
      img={contacts[2].imgURL} 
      tel={contacts[2].phone}
      email={contacts[2].email}
      />
      */}

    </div>
  );
}

export default App;

