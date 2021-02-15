import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList
          notes={this.props.notes}
          handleClick={this.props.handleClick}
          // handleDeletion={this.props.handleDeletion}
          filteredNotes={this.props.filteredNotes}
        />
        <button onClick={(e) => this.props.handleNewNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
