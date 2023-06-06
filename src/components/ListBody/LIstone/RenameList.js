import React from "react";
import { Container, Card, Col } from "react-bootstrap";

const RenameList = (props) => {
  return (
    <div>
      <ul>
        {props.onReN.map((one) => (
          <li key={one.id} id={one.id} className="outputone">
            <Container className="p-4">
              <Col md="4">
                <Card bg="primary" text="white">
                  <Card.Body>
                    <Card.Title>{one.title}</Card.Title>
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

export default RenameList;
