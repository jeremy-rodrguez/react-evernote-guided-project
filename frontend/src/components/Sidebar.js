import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList
          notes={this.props.notes}
          handleClick={this.props.handleClick}
          filteredNotes={this.props.filteredNotes}
          handleClickCancel={this.props.handleClickCancel}
          handleSort={this.props.handleSort}
        />
        <button onClick={(e) => this.props.handleNewNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
