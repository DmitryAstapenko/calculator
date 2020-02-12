import React, { Component } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "../styles/LoanAndLeaseCalculator.css";
import LoanCalculator from "./LoanCalculator.js";
import LeaseCalculator from "./LeaseCalculator.js";
import InfoCard from "./InfoCard.js";
import PropTypes from "prop-types";

export default class LoanAndLeaseCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estLoan: 0,
      estLease: 0
    };                
  }       

  handleChangeEstLoan = (value) => {
    this.setState({ estLoan: value });  
  }

  handleChangeEstLease = (value) => {
    this.setState({ estLease: value });  
  }

  render() {    
    return (                  
      <Container className="mt-1">    
        <Row>
          <Col md={8}>            
            <Tabs justify>
              <Tab 
                eventKey="loan" 
                title={"Est. Loan: " + Math.round(this.state.estLoan) + "/mo"}
              >
                <LoanCalculator                
                  msrp={this.props.dataInfoCard.msrp}
                  zipCode={this.props.zipCode}                  
                  handleChangeEst={this.handleChangeEstLoan}
                />
              </Tab>    
              <Tab 
                eventKey="lease" 
                title={"Est. Lease: " + Math.round(this.state.estLease) + "/mo"}
              >
                <LeaseCalculator
                  msrp={this.props.dataInfoCard.msrp}
                  zipCode={this.props.zipCode}                  
                  handleChangeEst={this.handleChangeEstLease}
                />
              </Tab>    
            </Tabs>  
          </Col>
          <Col md={4}>            
            <InfoCard dataInfoCard={this.props.dataInfoCard}/>
          </Col>
        </Row>
      </Container>
    );
  }
}