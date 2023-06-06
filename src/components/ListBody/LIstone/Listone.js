import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Container, Card, Col } from "react-bootstrap";
import "./Listone.css";
import ListoneForm from "./ListoneForm";
import ListoneOutput from "./ListoneOutput";
import RenameListFrom from "./RenameListFrom";
import RenameList from "./RenameList";
import ListTwo from "../ListTwo/ListTwo";

const Listone = (props) => {
  const [oneList, setOneList] = useState([]);

  const [oneclick, setOneclick] = useState(false);

  const [rename, setRename] = useState([]);

  const [onehandle, setOneHandle] = useState(false);


  const listoneclickHandler = () => {
    setOneclick(true);
  };

  const oneChangeHandler = (uTittle, uDescription, uId) => {
    setOneList((preList) => {
      return [
        ...preList,
        { tittle: uTittle, description: uDescription, id: uId },
      ];
    });

    setOneclick(false);
  };
  const deleteHandler = (id) => {
    const newListHand = oneList.filter((item) => item.id !== id);
    setOneList(newListHand);
  };

  const renameHandler = (uTitle, uId) => {
    setRename((preLis) => {
      return [...preLis, { title: uTitle, id: uId }];
    });
    setOneHandle(true)
  };

  return (
    <div className="emptypagebody">
      <span style={{marginLeft:"20px"}}>
      <div className="containerList">
        {!onehandle&&<RenameListFrom onSubmit={renameHandler} />}
        <RenameList onReN={rename} />
      </div>
      {onehandle&&<Container
        className="p-4"
        style={{
          background: "#808080",
          textAlign: "center",
          borderRadius: "0px",
          width: "15vw",
        }}
      >
        <Col md="4">
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>
                <h3>
                  <FaUser /> Add To Do
                </h3>
              </Card.Title>
              <Card.Text> Add to do description</Card.Text>
              <button onClick={listoneclickHandler}>+</button>
            </Card.Body>
          </Card>
        </Col>
      </Container>}
      {oneclick && <ListoneForm onOneSubmit={oneChangeHandler} />}
      <ListoneOutput onOne={oneList} onOneDelete={deleteHandler} />
      </span><span>
      {onehandle&&<ListTwo />}
      </span>
    </div>
  );
};

export default Listone;
