import React from "react";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
  return (
    <ul onClick={() => props.handleClickCancel()}>
      {props.filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          handleClick={props.handleClick}
          handleSort={props.handleSort}
        />
      ))}
    </ul>
  );
};

export default NoteList;

// I had () on line 7 and line 9
