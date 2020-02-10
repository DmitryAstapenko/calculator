import React, { Component } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "../styles/LoanAndLeaseCalculator.css";
import LoanCalculator from "./LoanCalculator.js";
import LeaseCalculator from "./LeaseCalculator.js";
import InfoCard from "./InfoCard.js";

class LoanAndLeaseCalculator extends Component {
  constructor() {
    super();                
  }     

  render() {
    return (                  
      <Container className="mt-1">    
        <Row>
          <Col md={8}>            
            <Tabs justify>
              <Tab eventKey="loan" title="Est. Loan">
                <LoanCalculator
                  msrp={this.props.infoCard.msrp}
                  zipCode={this.props.zipCode}
                />
              </Tab>    
              <Tab eventKey="lease" title="Est. Lease">
                <LeaseCalculator/>
              </Tab>    
            </Tabs>  
          </Col>
          <Col md={4}>            
            <InfoCard 
              msrp={this.props.infoCard.msrp}
              vehicleName={this.props.infoCard.vehicleName}
              dealerName={this.props.infoCard.dealerName}
              dealerPhone={this.props.infoCard.dealerPhone}
              dealerRating={this.props.infoCard.dealerRating}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoanAndLeaseCalculator;