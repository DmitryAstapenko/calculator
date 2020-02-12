import React from "react";
import { Card } from "react-bootstrap";
import "../styles/InfoCard.css";
import PropTypes from "prop-types";

const InfoCard = React.memo(function InfoCard(props) {
  return (        
    <Card>        
      <Card.Body>        
        <Card.Title><strong>MSRP ${props.dataInfoCard.msrp}</strong></Card.Title>        
        <Card.Text>{props.dataInfoCard.vehicleName}</Card.Text>
        <Card.Text>{props.dataInfoCard.dealerName}</Card.Text>
        <Card.Text>{props.dataInfoCard.dealerPhone}</Card.Text>
        <Card.Text>{props.dataInfoCard.dealerRating}</Card.Text>        
      </Card.Body>
    </Card>
  );     
});

InfoCard.propTypes = {
  dataInfoCard: PropTypes.object
}

export default InfoCard;