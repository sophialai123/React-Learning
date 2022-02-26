import React from "react";

//Create a function Card and a (pros) object to hold all the information:
// Create card properties, so it is resuseable.
function Card(props){
  return(
    
    <div className="card">
      <div className="top">
       {props.id}
       <h2 className="name">{props.name}</h2>
        <img
            className="circle-img"
            src={props.img}
            alt="avatar_img"
        />
        </div>
        <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
        </div>
    </div>

  );
  
}


export default Card;