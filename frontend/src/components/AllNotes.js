import React, { Component } from "react";
import NoteContainer from "./NoteContainer";
import Header from "./Header";

class AllNotes extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <NoteContainer />
      </div>
    );
  }
}

export default AllNotes;
