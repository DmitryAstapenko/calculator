import React, { Component } from "react";
import "../styles/LoanCalculator.css";
import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";
import InputControl from "./InputControl.js";

class LoanCalculator extends Component {
  constructor() {
    super();
    this.state = {      
      estLoan: 0,
      term: 24,
      tradeIn: 0,
      downPayment: 0,            
      creditScore: 750,  
      estimatedAPR: 0      
    };
  }

  render() {
    return (                
      <Form className="p-2">        
        <Form.Group as={Row}>          
          <Col md><Form.Label>ZIP Code</Form.Label></Col>
          <Col md><Form.Control value={this.props.zipCode}/></Col>          
        </Form.Group>                            
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
        <Form.Group as={Row}>
          <InputControl 
            labelText="Trade-In Value"
            inputValue={this.state.tradeIn}
            inputPrepend={{visible: true, text: "$"}}            
          />          
        </Form.Group>                    
        <Form.Group as={Row}>
          <Col md><Form.Label>Down Payment</Form.Label></Col>
          <InputGroup as={Col} md>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>              
            <FormControl value={this.state.downPayment}/>
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
            <FormControl value={this.state.estimatedAPR}/>
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>                          
          </InputGroup>    
        </Form.Group>                    
      </Form>
    );
  }   
}

export default LoanCalculator;