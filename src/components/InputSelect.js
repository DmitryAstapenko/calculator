import React, { Fragment, Component, useState } from "react";
import "../styles/InputSelect.css";
import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputSelect(props) 
{ 
  function handleChange(event) {    
    const value = event.target.value;    
    props.handleChange(Number(value));
  }

  return (       
    <Form.Group as={Row}>       
      <Col md><Form.Label>{props.labelText}</Form.Label></Col>
      <Col md>
        <Form.Control 
          as="select"
          value={props.inputValue} 
          onChange={handleChange}          
        >
          {props.options.map(option => {
            return (
              <option key={option} value={option}>{option}</option>
            );
          })}
        </Form.Control>
      </Col>                 
    </Form.Group>
  );     
}

InputSelect.propTypes = {    
  labelText: PropTypes.string,    
  inputValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func, 
  options: PropTypes.array
}

InputSelect.defaultProps = {    
  labelText: "",    
  handleChange: null
}