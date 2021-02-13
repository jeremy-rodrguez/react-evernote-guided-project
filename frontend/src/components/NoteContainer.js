import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
  state = {
    notes: [],
    addToRightPanel: {},
    editSelectedNote: false,
    filteredNote: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes")
      .then((response) => response.json())
      .then((notes) => this.setState({ notes: notes }));
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

  // handleFilter = (note) => {
  //   this.setState({
  //     filteredNote: true,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <Search handleFilter={this.handleFilter} />
        <div className="container">
          <Sidebar
            notes={this.state.notes}
            handleClick={this.handleClick}
            handleNewNote={this.handleNewNote}
            // handleDeletion={this.handleDeletion}
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
