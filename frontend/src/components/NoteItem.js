import React from "react";

const NoteItem = (props) => (
  <li onClick={() => props.handleClick(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{truncate(props.note.body)}</p>
  </li>
);

const truncate = (str) => {
  return str.length > 10 ? str.substring(0, 10) + "..." : str;
};

export default NoteItem;

// Ternery on line 11 is valid in the console with a debugger
// onClick={props.handleDeletion}
