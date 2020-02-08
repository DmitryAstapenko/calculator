import React, { Component } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "../styles/LoanAndLeaseCalculator.css";
import LoanCalculator from "./LoanCalculator.js";
import LeaseCalculator from "./LeaseCalculator.js";
import InfoCard from "./InfoCard.js";

class LoanAndLeaseCalculator extends Component {
  render() {
    return (                  
      <Container>    
        <Row>
          <Col md={8}>            
            <Tabs justify>
              <Tab eventKey="loan" title="Est. Loan">
                <LoanCalculator/>
              </Tab>    
              <Tab eventKey="lease" title="Est. Lease">
                <LeaseCalculator/>
              </Tab>    
            </Tabs>  
          </Col>
          <Col md={4}>            
            <InfoCard/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoanAndLeaseCalculator;