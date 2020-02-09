import React, { Component } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "../styles/LoanAndLeaseCalculator.css";
import LoanCalculator from "./LoanCalculator.js";
import LeaseCalculator from "./LeaseCalculator.js";
import InfoCard from "./InfoCard.js";

class LoanAndLeaseCalculator extends Component {
  constructor() {
    super();
    this.state = {
      downPayment: 0,      
      tradeIn: 0,
      creditScore: 750,
      dataInfoCard: {
        msrp: 42818,
        vehicleName: "Toyota Prius",  
        dealerName: "New York Toyota car dealership",
        dealerPhone: "(855) 977-2913",
        dealerRating: 4.1
      }  
    };
  }    

  render() {
    return (                  
      <Container className="mt-1">    
        <Row>
          <Col md={8}>            
            <Tabs justify>
              <Tab eventKey="loan" title="Est. Loan">
                <LoanCalculator
                  zipCode={247210}
                />
              </Tab>    
              <Tab eventKey="lease" title="Est. Lease">
                <LeaseCalculator/>
              </Tab>    
            </Tabs>  
          </Col>
          <Col md={4}>            
            <InfoCard 
              msrp={this.state.dataInfoCard.msrp}
              vehicleName={this.state.dataInfoCard.vehicleName}
              dealerName={this.state.dataInfoCard.dealerName}
              dealerPhone={this.state.dataInfoCard.dealerPhone}
              dealerRating={this.state.dataInfoCard.dealerRating}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoanAndLeaseCalculator;