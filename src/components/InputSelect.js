import React from "react";
import "../styles/InputSelect.css";
import { Form, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const InputSelect = React.memo(function InputSelect(props) { 
  function handleChange(event) {    
    const value = event.target.value;    
    props.handleChange(Number(value));
  }

  function handleBlur() {
    props.handleChangeEstLoan();
  }

  function handleKeydown(event) {
    if (event.key === "Enter")
      props.handleChangeEstLoan();
  }

  return (       
    <Form.Group as={Row}>          
      <Col md><Form.Label>{props.labelText}</Form.Label></Col>
      <Col md>
        <Form.Control 
          as="select"
          value={props.inputValue} 
          onChange={handleChange}          
          onBlur={handleBlur}
          onKeyDown={handleKeydown}
        >
          {props.options.map(option => {
            return (
              <option 
                key={option.value} 
                value={option.value}
              >
                {option.text}
              </option>
            );
          })}
        </Form.Control>
      </Col>                 
    </Form.Group>
  );     
});

InputSelect.propTypes = {    
  labelText: PropTypes.string,    
  inputValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired, 
  handleChangeEstLoan: PropTypes.func.isRequired,
  options: PropTypes.array
}

InputSelect.defaultProps = {    
  labelText: ""      
}

export default InputSelect;