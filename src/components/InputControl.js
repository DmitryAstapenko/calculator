import React, { Fragment, Component } from "react";
import "../styles/InputControl.css";
import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";
import InputPrepend from "./InputPrepend.js"
import InputAppend from "./InputAppend.js"
import PropTypes from "prop-types";

export default function InputControl({ readOnly, labelText, inputValue, inputPrepend, inputAppend }) {  
  return (       
    <Form.Group as={Row}>       
      <Col md><Form.Label>{labelText}</Form.Label></Col>            
      <InputGroup as={Col} md>
        <InputPrepend 
          visible={inputPrepend.visible}
          text={inputPrepend.text}
        />
        <FormControl value={inputValue} readOnly={readOnly}/>
        <InputAppend
          visible={inputAppend.visible}
          text={inputAppend.text}
        />
      </InputGroup>    
    </Form.Group>
  );     
}

InputControl.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  inputValue: PropTypes.number.isRequired,
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
  inputPrepend: {
    visible: false,
    text: ""
  },
  inputAppend: {
    visible: false,
    text: ""
  }
}