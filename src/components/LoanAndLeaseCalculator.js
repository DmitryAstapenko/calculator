import React, { Component } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "../styles/LoanAndLeaseCalculator.css";
import LoanCalculator from "./LoanCalculator.js";
import LeaseCalculator from "./LeaseCalculator.js";
import InfoCard from "./InfoCard.js";
import PropTypes from "prop-types";

class LoanAndLeaseCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estLoan: 0    
    };                
  }       

  handleChangeEstLoan = (value) => {
    this.setState({ estLoan: value });  
  }

  render() {
    return (                  
      <Container className="mt-1">    
        <Row>
          <Col md={8}>            
            <Tabs justify>
              <Tab 
                eventKey="loan" 
                title={"Est. Loan: " + Math.round(this.state.estLoan)}
              >
                <LoanCalculator                
                  msrp={this.props.infoCard.msrp}
                  zipCode={this.props.zipCode}                  
                  handleChangeEstLoan={this.handleChangeEstLoan}
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