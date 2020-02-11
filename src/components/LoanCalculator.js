import React, { Component, useState } from "react";
import "../styles/LoanCalculator.css";
import { Form, Col, InputGroup, FormControl, Row, Button } from "react-bootstrap";
import InputControl from "./InputControl.js";
import InputSelect from "./InputSelect.js"
import PropTypes from "prop-types";

export default class LoanCalculator extends Component {  
  constructor(props) {
    super(props);
    this.state = {      
      estLoan: 0,
      term: 24,
      tradeIn: 0,
      downPayment: 0,
      creditScore: 750,
      estimatedAPR: 0
    };    
  }

  // calculateLoan = () => {
  //   const value = 
  //   ((this.props.msrp - this.state.tradeIn - this.state.downPayment)
  //   * this.state.creditScore * (1 + this.state.estimatedAPR / 100)) 
  //   / this.state.term;    
  //   this.setState({ estLoan: value });
  // }

  handleChangeTerm = (value) => {
    this.setState({ term: value });    
  }

  handleChangeTradeIn = (value) => {
    this.setState({ tradeIn: value });    
  }

  handleChangeDownPayment = (value) => {
    this.setState({ downPayment: value });    
  }

  handleChangeCreditScore = (value) => {
    this.setState({ creditScore: value });    
  }

  handleChangeEstimatedAPR = (value) => {
    this.setState({ estimatedAPR: value });    
  }

  handleSubmit = (event) => { 
    event.preventDefault();
    console.log(this.state.estLoan); 
    console.log(this.state.term);        
    console.log(this.state.tradeIn);
    console.log(this.state.downPayment);
    console.log(this.state.creditScore);
    console.log(this.state.estimatedAPR);
    console.log(this.props.zipCode);        
  } 

  render() {
    return (                
      <Form className="p-2" onSubmit={this.handleSubmit}>                                       
        <InputSelect
          labelText="Term (Mounths)"
          inputValue={this.state.term}
          handleChange={this.handleChangeTerm}
          options={[12, 24, 36, 48, 60, 72, 80]}
        />        
        <InputControl  
          labelText="Trade-In Value"
          inputValue={this.state.tradeIn}
          handleChange={this.handleChangeTradeIn}                   
          inputPrepend={{visible: true, text: "$"}}             
        />
        <InputControl  
          labelText="Down Payment"
          inputValue={this.state.downPayment}
          handleChange={this.handleChangeDownPayment}                   
          inputPrepend={{visible: true, text: "$"}}             
        />
        <InputSelect
          labelText="Approx. Credit Score"
          inputValue={this.state.creditScore}
          handleChange={this.handleChangeCreditScore}
          options={[600, 650, 700, 750, 800, 850, 900]}
        />     
        <InputControl  
          labelText="Estimated APR"
          inputValue={this.state.estimatedAPR}
          handleChange={this.handleChangeEstimatedAPR}                   
          inputAppend={{visible: true, text: "%"}}             
        />   
        <InputControl
          readOnly={true}
          labelText="For ZIP Code"
          inputValue={this.props.zipCode}        
        />    
        <Form.Group as={Row}>
          <Col>
            <Button type="submit" block>Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

LoanCalculator.propTypes = {
  msrp: PropTypes.number,
  zipCode: PropTypes.number  
}