import React from "react";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          handleClick={props.handleClick}
          handleDeletion={props.handleDeletion}
        />
      ))}
    </ul>
  );
};

export default NoteList;

// I had () on line 7 and line 9
