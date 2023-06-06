import React from "react";
import { useRef } from "react";

const RenameListFrom = (props) => {
  const renameListInputRef = useRef();

  const id = Math.random(Math.round() * 1000000);

  const renameHandler = (event) => {
    event.preventDefault();

    const renameListupdate = renameListInputRef.current.value;

    console.log(renameListupdate)

    props.onSubmit(renameListupdate, id);
  };

  return (
    <div>
      <form onSubmit={renameHandler}>
        <label>ADD List Name</label>
        <input type="text" ref={renameListInputRef} required />
        <button>+</button>
      </form>
    </div>
  );
};

export default RenameListFrom;
