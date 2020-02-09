import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/InfoCard.css";

function InfoCard(props) {  
  return (        
    <Card>        
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>{props.msrp}</Card.Text>
        <Card.Text>{props.vehicleName}</Card.Text>
        <Card.Text>{props.dealerName}</Card.Text>
        <Card.Text>{props.dealerPhone}</Card.Text>
        <Card.Text>{props.dealerRating}</Card.Text>        
      </Card.Body>
    </Card>
  );     
}

export default InfoCard;