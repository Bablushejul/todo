import React, { useState } from 'react';
import { Container, Card, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import ListTwoForm from './ListTwoForm';
import RenameListFrom from '../LIstone/RenameListFrom';
import RenameList from '../LIstone/RenameList';
import ListTwoOutput from './ListTwoOutput'
import './ListTwo.css'
import Listone from '../LIstone/Listone';

const ListTwo = (props) => {

const [twoList,setTwoList]=useState([])

const [secondClick,setSecondClick]=useState(false)

const [rename, setRename] = useState([]);

  const [onehandle, setOneHandle] = useState(false);


const listHandler=(uTittle,uDescription,uId)=>{
  setTwoList((preList)=>{
    return [...preList,{tittle:uTittle,description:uDescription,id:uId}]
  })
  setSecondClick(false)

}

const twoClickChangeHandler=()=>{
  setSecondClick(true)
}

const deleteHandler=(id)=>{

  const newListHand=twoList.filter((item)=>item.id!==id)
  setTwoList(newListHand)

}

const renameHandler = (uTitle, uId) => {
  setRename((preLis) => {
    return [...preLis, { title: uTitle, id: uId }];
  });
  setOneHandle(true)
};

  return (
    <div className="emptylistpagebody">
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
          width:"15vw",
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
              <button onClick={twoClickChangeHandler}>+</button>
            </Card.Body>
          </Card>
        </Col>
      </Container>}
     {secondClick&&<ListTwoForm  onTwoSubmit={listHandler}/>}
      <ListTwoOutput onTwo={twoList} onTwoDelete={deleteHandler} />
      </span>
      <span>
      {onehandle&&<Listone />}
      </span>
    </div>
  );
}

export default ListTwo;
