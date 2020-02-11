import React, { Component } from "react";
import LoanAndLeaseCalculator from "./LoanAndLeaseCalculator.js";
import "../styles/App.css";

class App extends Component {
  
  loadDataInfoCard() {
    return {
      msrp: 23240,
      vehicleName: "Toyota Prius",  
      dealerName: "New York Toyota car dealership",
      dealerPhone: "(855) 977-2913",
      dealerRating: 4.1
    }
  }

  getZipCode() {
    return 247210;
  }

  render() {        
    return (
      <LoanAndLeaseCalculator 
        infoCard={this.loadDataInfoCard()}
        zipCode={this.getZipCode()}
      />
    );
  }
}

export default App;