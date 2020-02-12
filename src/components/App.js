import React, { Component } from "react";
import LoanAndLeaseCalculator from "./LoanAndLeaseCalculator.js";
import "../styles/App.css";
import { Spinner } from "react-bootstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {      
      zipCode: 0,      
      isLoadedZipCode: false,
      dataInfoCard: { },
      isLoadedDataInfoCard: false
    };
  }

  componentDidMount() {
    const data = require("../../public/data-info-card.json");     
    this.setState({ 
      dataInfoCard: data, 
      isLoadedDataInfoCard: true
    });
    fetch("https://ipinfo.io/json?token=5de68b00f760f2")
        .then(response => response.json())
        .then(data => {          
          this.setState({ 
            zipCode: Number(data.postal),
            isLoadedZipCode: true
          });                    
        })
}

  render() {        
    return this.state.isLoadedZipCode && this.state.isLoadedDataInfoCard ? (
      <LoanAndLeaseCalculator 
        dataInfoCard={this.state.dataInfoCard}
        zipCode={this.state.zipCode}
      />
    ) : (      
      <Spinner animation="border" size="lg" />
    );
  }
}