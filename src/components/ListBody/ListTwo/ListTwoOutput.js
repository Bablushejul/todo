import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import "./ListTwoOutput.css";

const ListTwoOutput = (props) => {
  return (
    <div>
      <ul>
        {props.onTwo.map((two) => (
          <li key={two.id} id={two.id} className="outputtwo">
            <Container className="p-4">
              <Col md="4">
                <Card bg="primary" text="white">
                  <Card.Body>
                    <Card.Title>{two.tittle}</Card.Title>
                    <Card.Text> {two.description}</Card.Text>
                    <button onClick={()=>props.onTwoDelete(two.id)}>-</button>
                  </Card.Body>
                </Card>
              </Col>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTwoOutput;
