import React, { Fragment, Component } from "react";
import "../styles/InputControlAppend.css";
import { InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputControlAppend({ visible, text }) {  
  return visible ? (
    <InputGroup.Append>
      <InputGroup.Text>{text}</InputGroup.Text>
    </InputGroup.Append>
  ) : null;
}

InputControlAppend.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string  
}