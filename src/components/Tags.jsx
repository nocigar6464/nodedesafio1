import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = (props) => {
  return (
    <Badge bg={props.color} style={props.style}>
      {props.text}
    </Badge>
  );
};

export default Tags;
