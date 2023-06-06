import React from 'react';
import { Container, Card, Col } from "react-bootstrap";
import './ListoneOutput.css'

const ListoneOutput = (props) => {
  return (
    <div >
      <ul>
        {props.onOne.map((one)=>(
          <li key={one.id} id={one.id}  className='outputone'>
           <Container className="p-4">
              <Col md="4">
                <Card bg="primary" text="white">
                  <Card.Body>
                    <Card.Title>{one.tittle}</Card.Title>
                    <Card.Text>  {one.description}</Card.Text>
                    <button onClick={()=>props.onOneDelete(one.id)}>-</button>
                  </Card.Body>
                </Card>
              </Col>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListoneOutput;
