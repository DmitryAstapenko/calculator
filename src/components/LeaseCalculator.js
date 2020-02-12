import React, { Fragment, Component } from "react";
import "../styles/LeaseCalculator.css";
import { Form } from "react-bootstrap";
import InputControl from "./InputControl.js";
import InputSelect from "./InputSelect.js"
import PropTypes from "prop-types";

export default class LeaseCalculator extends Component {  
  constructor(props) {
    super(props);
    this.state = {            
      term: 36,
      mileage: 12000,
      tradeIn: 0,
      downPayment: 0,
      creditScore: 0.95,      
    };    
  }

  componentDidMount() {
    this.handleChangeEstLease();
  }

  calculateValueEstLease() {    
    return((this.props.msrp - this.state.tradeIn - this.state.downPayment)
    * this.state.mileage / (10000 * this.state.term * this.state.creditScore));
  }

  handleChangeEstLease = () => {
    const value = this.calculateValueEstLease();    
    this.props.handleChangeEst(value);       
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });    
  }  

  render() {
    return (                            
      <Form className="p-2">  
        <InputSelect
          name="term"
          labelText="Term (Mounths)"
          inputValue={this.state.term}
          handleChange={this.handleChange}
          handleChangeEst={this.handleChangeEstLease}
          options={[            
            {text: "24", value: 24}, 
            {text: "36", value: 36}, 
            {text: "48", value: 48}           
          ]}
        />  
        <InputSelect
          name="mileage"
          labelText="Annual Miles"
          inputValue={this.state.mileage}
          handleChange={this.handleChange}
          handleChangeEst={this.handleChangeEstLease}
          options={[            
            {text: "10000", value: 10000}, 
            {text: "12000", value: 12000}, 
            {text: "15000", value: 15000}           
          ]}
        />              
        <InputControl  
          name="tradeIn"
          labelText="Trade-In Value"
          inputValue={this.state.tradeIn}
          handleChange={this.handleChange}       
          handleChangeEst={this.handleChangeEstLease}            
          inputPrepend={{visible: true, text: "$"}}             
        />
        <InputControl 
          name="downPayment" 
          labelText="Down Payment"
          inputValue={this.state.downPayment}
          handleChange={this.handleChange}   
          handleChangeEst={this.handleChangeEstLease}                
          inputPrepend={{visible: true, text: "$"}}             
        />
        <InputSelect
          name="creditScore"
          labelText="Approx. Credit Score"
          inputValue={this.state.creditScore}
          handleChange={this.handleChange}
          handleChangeEst={this.handleChangeEstLease}
          options={[
            {text: "Poor 639 or less" , value: 1.2},
            {text: "Fair 640 - 699" , value: 1.05},
            {text: "Good 700 - 749" , value: 1},
            {text: "Excellent 750 - 850" , value: 0.95}            
          ]}
        />   
        <InputControl          
          readOnly={true}
          labelText="For ZIP Code"
          inputValue={this.props.zipCode}  
          handleChange={() => {}}  
          handleChangeEst={() => {}}       
        />              
      </Form>
    );
  }
}

LeaseCalculator.propTypes = {
  msrp: PropTypes.number,
  zipCode: PropTypes.number,
  handleChangeEst: PropTypes.func  
}