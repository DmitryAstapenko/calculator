import React, { Fragment, Component } from "react";
import "../styles/InputPrepend.css";
import { InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputPrepend({ visible, text }) {  
  return visible ? (
    <InputGroup.Prepend>
      <InputGroup.Text>{text}</InputGroup.Text>
    </InputGroup.Prepend>
  ) : null;
}

InputPrepend.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string  
}