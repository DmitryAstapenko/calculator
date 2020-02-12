import React from "react";
import "../styles/InputControl.css";
import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";
import InputControlPrepend from "./InputControlPrepend.js"
import InputControlAppend from "./InputControlAppend.js"
import PropTypes from "prop-types";

const InputControl = React.memo(function InputControl(props) {
  function handleChange(event) {    
    const name = event.target.name;
    const value = event.target.value;    
    props.handleChange(name, Number(value));
  }

  function  handleBlur() {
    props.handleChangeEst();
  }

  function handleKeydown(event) {
    if (event.key === "Enter")
      props.handleChangeEst();
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
          name={props.name}
          readOnly={props.readOnly}
          value={props.inputValue} 
          onChange={handleChange}          
          onBlur={handleBlur}
          onKeyDown={handleKeydown}
        />
        <InputControlAppend
          visible={props.inputAppend.visible}
          text={props.inputAppend.text}
        />        
      </InputGroup>    
    </Form.Group>
  );     
});

InputControl.propTypes = { 
  name: PropTypes.string,  
  readOnly: PropTypes.bool,  
  labelText: PropTypes.string,    
  inputValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeEst: PropTypes.func.isRequired,
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
  name: "",  
  readOnly: false,    
  labelText: "",      
  inputPrepend: {
    visible: false,
    text: ""
  },
  inputAppend: {
    visible: false,
    text: ""
  }
}

export default InputControl;