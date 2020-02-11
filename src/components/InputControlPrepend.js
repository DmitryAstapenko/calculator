import React, { Fragment, Component } from "react";
import "../styles/InputControlPrepend.css";
import { InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputControlPrepend({ visible, text }) {  
  return visible ? (
    <InputGroup.Prepend>
      <InputGroup.Text>{text}</InputGroup.Text>
    </InputGroup.Prepend>
  ) : null;
}

InputControlPrepend.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string  
}