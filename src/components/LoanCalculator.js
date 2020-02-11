import React, { Component, useState } from "react";
import "../styles/LoanCalculator.css";
import { Form } from "react-bootstrap";
import InputControl from "./InputControl.js";
import InputSelect from "./InputSelect.js"
import PropTypes from "prop-types";

export default class LoanCalculator extends Component {  
  constructor(props) {
    super(props);
    this.state = {            
      term: 24,
      tradeIn: 0,
      downPayment: 0,
      creditScore: 0.95,
      estimatedAPR: 0
    };    
  }

  calculateValueEstLoan() {
    return(((this.props.msrp - this.state.tradeIn - this.state.downPayment)
    * this.state.creditScore * (1 + this.state.estimatedAPR / 100)) 
    / this.state.term);
  }

  handleChangeEstLoan = () => {
    const value = this.calculateValueEstLoan();
    this.props.handleChangeEstLoan(value);    
    // console.log("Done!");
  }

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

  render() {
    return (                            
      <Form className="p-2">                                       
        <InputSelect
          labelText="Term (Mounths)"
          inputValue={this.state.term}
          handleChange={this.handleChangeTerm}
          handleChangeEstLoan={this.handleChangeEstLoan}
          options={[
            {text: "12", value: 12}, 
            {text: "24", value: 24}, 
            {text: "36", value: 36}, 
            {text: "48", value: 48}, 
            {text: "60", value: 60}, 
            {text: "72", value: 72}, 
            {text: "84", value: 84}, 
          ]}
        />        
        <InputControl  
          labelText="Trade-In Value"
          inputValue={this.state.tradeIn}
          handleChange={this.handleChangeTradeIn}       
          handleChangeEstLoan={this.handleChangeEstLoan}            
          inputPrepend={{visible: true, text: "$"}}             
        />
        <InputControl  
          labelText="Down Payment"
          inputValue={this.state.downPayment}
          handleChange={this.handleChangeDownPayment}   
          handleChangeEstLoan={this.handleChangeEstLoan}                
          inputPrepend={{visible: true, text: "$"}}             
        />
        <InputSelect
          labelText="Approx. Credit Score"
          inputValue={this.state.creditScore}
          handleChange={this.handleChangeCreditScore}
          handleChangeEstLoan={this.handleChangeEstLoan}
          options={[
            {text: "Poor 639 or less" , value: 1.2},
            {text: "Fair 640 - 699" , value: 1.05},
            {text: "Good 700 - 749" , value: 1},
            {text: "Excellent 750 - 850" , value: 0.95}            
          ]}
        />     
        <InputControl  
          labelText="Estimated APR"
          inputValue={this.state.estimatedAPR}
          handleChange={this.handleChangeEstimatedAPR}  
          handleChangeEstLoan={this.handleChangeEstLoan}                 
          inputAppend={{visible: true, text: "%"}}             
        />   
        <InputControl
          readOnly={true}
          labelText="For ZIP Code"
          inputValue={this.props.zipCode}  
          handleChange={() => {}}  
          handleChangeEstLoan={() => {}}       
        />            
      </Form>
    );
  }
}

LoanCalculator.propTypes = {
  msrp: PropTypes.number,
  zipCode: PropTypes.number,
  handleChangeEstLoan: PropTypes.func  
}