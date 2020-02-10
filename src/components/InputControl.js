import React, { Fragment, Component } from "react";
import "../styles/InputControl.css";
import { Form, Col, InputGroup, FormControl } from "react-bootstrap";
import InputPrepend from "./InputPrepend.js"
import InputAppend from "./InputAppend.js"
import PropTypes from "prop-types";

export default function InputControl(props) {  
  return (          
    <Fragment>
      <Col md><Form.Label>{props.labelText}</Form.Label></Col>            
      <InputGroup as={Col} md>
        <InputPrepend 
          visible={props.inputPrepend.visible}
          text={props.inputPrepend.text}
        />
        <FormControl value={props.inputValue}/>
        <InputAppend
          visible={props.inputAppend.visible}
          text={props.inputAppend.text}
        />
      </InputGroup>    
    </Fragment>
  );     
}

InputControl.propTypes = {
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
    value: false,
    text: ""
  },
  inputAppend: {
    value: false,
    text: ""
  }
}