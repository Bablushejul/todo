import React, { useRef } from 'react';
import './ListTwoForm.css'

const ListTwoForm = (props) => {

  const descriptionInputRef=useRef()

  const tittleInputRef=useRef();

  const id=Math.random(Math.round()*100000000)


  const submitHandler=(event)=>{

    event.preventDefault()

    const enteredtittle=tittleInputRef.current.value;

    const enteredDescription=descriptionInputRef.current.value;
    
    props.onTwoSubmit(enteredtittle,enteredDescription,id)

  }
  return (
    <div className='fromtwo'>
      <form>
        <label>
          tittle<div><input type='text' ref={tittleInputRef} required/></div>
        </label>
        <label>
          description<div><textarea ref={descriptionInputRef} required/></div>
        </label>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default ListTwoForm;
