import React from "react";

const ContactCard = props => (
  <div>
    <p>Nombre: {props.info.name}</p>
    <img src={props.info.imgUrl} className="container btn"></img>
    <p>telefono: {props.info.phone} </p>
    <p>Email: {props.info.email} </p>
    <br></br>
  </div>
);

export default ContactCard;
