import React from "react";
import { FaUser } from "react-icons/fa";
import "./PageLayoutBody.css";
//import EditFormList from "./EditFormList";
//import EditForm from "./EditForm";
import { Container, Card, Col } from "react-bootstrap";
import RenameListFrom from "../ListBody/LIstone/RenameListFrom";
import RenameList from "../ListBody/LIstone/RenameList";
import ListoneForm from "../ListBody/LIstone/ListoneForm";
import ListoneOutput from "../ListBody/LIstone/ListoneOutput";
import { useState } from "react";

const PageLayOutBody = () => {
  // const [edit, setEdit] = useState([]);

  // const listHandler = (uTittle, uDescription, uId) => {
  //   setEdit((preList) => {
  //     return [
  //       ...preList,
  //       { tittle: uTittle, description: uDescription, id: uId },
  //     ];
  //   });
  // };

  // const deleteHandler = (id) => {
  //   const newListHand = edit.filter((item) => item.id !== id);
  //   setEdit(newListHand);
  // };

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
    setOneHandle(true);
  };

  return (
    <div className="rigtblock">
      {/* <div className="edittodo">
        <h1>
          <FaArrowLeft /> Edit
        </h1>

        <EditForm onSubmitForm={listHandler} />
        <EditFormList onEdit={edit} onDelete={deleteHandler} />
        
      </div> */}

<div className="containerList">
        {!onehandle&&<RenameListFrom onSubmit={renameHandler} />}
        <RenameList onReN={rename} />
      </div>
      <Container
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
      </Container>
      {oneclick && <ListoneForm onOneSubmit={oneChangeHandler} />}
      <ListoneOutput onOne={oneList} onOneDelete={deleteHandler} />


    </div>
  );
};

export default PageLayOutBody;
