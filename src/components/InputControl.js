import React, { Fragment, Component, useState } from "react";
import "../styles/InputControl.css";
import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";
import InputControlPrepend from "./InputControlPrepend.js"
import InputControlAppend from "./InputControlAppend.js"
import PropTypes from "prop-types";

export default function InputControl(props) 
{ 
  function handleChange(event) {    
    const value = event.target.value;    
    props.handleChange(Number(value));
  }

  return (       
    <Form.Group as={Row}>       
      <Col md><Form.Label>{props.labelText}</Form.Label></Col>            
      <InputGroup as={Col} md>
        <InputControlPrepend 
          visible={props.inputPrepend.visible}
          text={props.inputPrepend.text}
        />
        <FormControl                     
          type="number"          
          readOnly={props.readOnly}
          value={props.inputValue} 
          onChange={handleChange}          
        />
        <InputControlAppend
          visible={props.inputAppend.visible}
          text={props.inputAppend.text}
        />        
      </InputGroup>    
    </Form.Group>
  );     
}

InputControl.propTypes = {  
  readOnly: PropTypes.bool,  
  labelText: PropTypes.string,    
  inputValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
  inputPrepend: PropTypes.shape({
    visible: PropTypes.bool,
    text: PropTypes.string
  }),
  inputAppend: PropTypes.shape({
    visible: PropTypes.bool,
    text: PropTypes.string
  })
}

InputControl.defaultProps = {    
  readOnly: false,    
  labelText: "",    
  handleChange: null,
  inputPrepend: {
    visible: false,
    text: ""
  },
  inputAppend: {
    visible: false,
    text: ""
  }
}