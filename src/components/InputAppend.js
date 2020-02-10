import React, { Fragment, Component } from "react";
import "../styles/InputAppend.css";
import { InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputAppend(props) {  
  if (props.visible)
    return (
      <InputGroup.Append>
        <InputGroup.Text>{props.text}</InputGroup.Text>
      </InputGroup.Append>
    );
  else 
    return (
      <Fragment></Fragment>
    );  
}

InputAppend.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string
}