import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./CSS/Mycardcss.css"; //no se si esta bien ordenado en esta carpeta o debe ir en otra parte
import Tags from "./Tags";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Mycard(props) {
  return (
    <Card style={{ width: "200px" }}>
      <Card.Img
        variant="top"
        src={props.imageUrl}
        alt="muestra la foto de un perro"
      />
      <Card.Body>
        <Card.Title>{props.dogname}</Card.Title>
        <Card.Text>{props.dogdescription}</Card.Text>
        <Tags
          color={props.tagColor}
          text={props.tagText}
          style={{ marginTop: "auto" }}
        />
      </Card.Body>
    </Card>
  );
}

export default Mycard;
