import React, { Fragment } from "react";

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.addToRightPanel.title}</h2>
      <p>{props.addToRightPanel.body}</p>
      <button onClick={() => props.handleEdit(props.addToRightPanel)}>
        Edit
      </button>
      <button>Delete</button>
    </Fragment>
  );
};

export default NoteViewer;
