import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/InfoCard.css";

function InfoCard() {  
  return (    
    <Card>        
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Info card</Card.Text>
        <Card.Text>Info card</Card.Text>
        <Card.Text>Info card</Card.Text>
        <Button variant="primary">Button</Button>
      </Card.Body>
    </Card>
  );     
}

export default InfoCard;