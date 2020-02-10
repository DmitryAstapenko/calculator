import React, { Fragment, Component } from "react";
import "../styles/InputPrepend.css";
import { InputGroup } from "react-bootstrap";

export default function InputPrepend(props) {  
  if (props.visible)
    return (
      <InputGroup.Prepend>
        <InputGroup.Text>{props.text}</InputGroup.Text>
      </InputGroup.Prepend>
    );
  else 
    return (
      <Fragment></Fragment>
    );  
}