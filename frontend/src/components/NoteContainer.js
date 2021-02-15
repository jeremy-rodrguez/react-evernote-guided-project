import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
  state = {
    notes: [],
    addToRightPanel: {},
    editSelectedNote: false,
    filteredNotes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes")
      .then((response) => response.json())
      .then((notes) => this.setState({ notes: notes, filteredNotes: notes }));
  }

  handleNewNote = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "title",
        body: "text",
        user_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((newNote) => {
        this.setState((prevState) => {
          return { notes: [...prevState.notes, newNote] };
        });
      });
  };

  // handleDeletion = (notes) => {
  //   console.log("Delete Me");
  //   fetch("http://localhost:3000/api/v1/notes/${note.id}", {
  //     method: "DELETE",
  //   });
  //   .then(response => response.json())
  //   .then(() => {

  //   })
  // };

  handleClick = (notes) => {
    this.setState({
      addToRightPanel: notes,
    });
  };

  handleEdit = (note) => {
    this.setState({
      editSelectedNote: true,
    });
  };

  handleFilter = (e) => {
    // console.log(e.target.value);
    var filteredNote = [];
    const noteTarget = e.target.value;
    for (let i = 0; i < this.state.notes.length; i++) {
      const noteTitles = this.state.notes[i].title;

      if (noteTitles.includes(noteTarget)) {
        // console.log("This works.");
        filteredNote.push(this.state.notes[i]);
      }
    }
    this.setState({
      filteredNotes: filteredNote,
    });
  };

  render() {
    return (
      <Fragment>
        <Search handleFilter={this.handleFilter} notes={this.state.notes} />
        <div className="container">
          <Sidebar
            notes={this.state.notes}
            handleClick={this.handleClick}
            handleNewNote={this.handleNewNote}
            // handleDeletion={this.handleDeletion}
            filteredNotes={this.state.filteredNotes}
          />
          <Content
            addToRightPanel={this.state.addToRightPanel}
            handleEdit={this.handleEdit}
            editSelectedNote={this.state.editSelectedNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
