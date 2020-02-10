import React, { Component, useState } from "react";
import "../styles/LoanCalculator.css";
import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";
import InputControl from "./InputControl.js";
import PropTypes from "prop-types";

export default function LoanCalculator({ msrp, zipCode}) {  
  let [estLoan, setEstLoan] = useState(0);
  let [term, setTerm] = useState(24);
  let [tradeIn, setTradeIn] = useState(0);
  let [downPayment, setDownPayment] = useState(0);
  let [creditScore, setCreditScore] = useState(750);
  let [estimatedAPR, setEstimatedAPR] = useState(0);

  return (                
    <Form className="p-2">        
      <InputControl
        readOnly={true}
        labelText="ZIP Code"
        inputValue={zipCode}        
      />                       
      <Form.Group as={Row}>                                                  
        <Col md><Form.Label>Term (Mounths)</Form.Label></Col>
        <Col md>
          <Form.Control as="select">
            <option>12</option>
            <option>24</option>
            <option>36</option>
            <option>48</option>
            <option>60</option>
            <option>72</option>
            <option>84</option>
          </Form.Control>
        </Col>
      </Form.Group>      
      <InputControl  
        readOnly={false}
        labelText="Trade-In Value"
        inputValue={tradeIn}
        inputPrepend={{visible: true, text: "$"}}            
      />          
      <Form.Group as={Row}>
        <Col md><Form.Label>Down Payment</Form.Label></Col>
        <InputGroup as={Col} md>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>              
          <FormControl value={downPayment}/>
        </InputGroup>    
      </Form.Group>
      <Form.Group as={Row}>                                                  
        <Col md><Form.Label>Approx. Credit Score</Form.Label></Col>
        <Col md>
          <Form.Control as="select">
            <option>600-649</option>
            <option>650-699</option>
            <option>700-749</option>
            <option>750-849</option>                            
            <option>850-900</option>                            
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md><Form.Label>Estimated APR</Form.Label></Col>
        <InputGroup as={Col} md>  
          <FormControl value={estimatedAPR}/>
          <InputGroup.Append>
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup.Append>                          
        </InputGroup>    
      </Form.Group>                    
    </Form>
  );
}

LoanCalculator.propTypes = {
  msrp: PropTypes.number,
  zipCode: PropTypes.number  
}