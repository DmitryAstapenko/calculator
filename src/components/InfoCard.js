import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/InfoCard.css";
import PropTypes from "prop-types";

export default function InfoCard(props) {  
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

InfoCard.propTypes = {
  msrp: PropTypes.number,
  vehicleName: PropTypes.string,
  dealerName: PropTypes.string,
  dealerPhone: PropTypes.string,
  dealerRating: PropTypes.number
}