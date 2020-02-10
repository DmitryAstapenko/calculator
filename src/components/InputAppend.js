import React, { Fragment, Component } from "react";
import "../styles/InputAppend.css";
import { InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputAppend({ visible, text }) {  
  return visible ? (
    <InputGroup.Append>
      <InputGroup.Text>{text}</InputGroup.Text>
    </InputGroup.Append>
  ) : null;
}

InputAppend.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string  
}