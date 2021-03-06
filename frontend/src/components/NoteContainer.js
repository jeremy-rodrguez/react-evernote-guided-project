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
          return {
            notes: [...prevState.notes, newNote],
            addToRightPanel: newNote,
            editSelectedNote: true,
          };
        });
      });
  };

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
    var filteredNote = [];
    const noteTarget = e.target.value;
    for (let i = 0; i < this.state.notes.length; i++) {
      const noteTitles = this.state.notes[i].title;

      if (noteTitles.includes(noteTarget)) {
        filteredNote.push(this.state.notes[i]);
      }
    }
    this.setState({
      filteredNotes: filteredNote,
    });
  };

  handleEditedChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      addToRightPanel: {
        ...prevState.addToRightPanel,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleCancel = () => {
    this.setState({
      editSelectedNote: false,
    });
  };

  handleClickCancel = () => {
    this.setState({
      editSelectedNote: false,
    });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "A-Z":
        let sortedNotes = this.state.filteredNotes.sort((a, b) => {
          console.log(a.title, b.title);
          return a.title > b.title ? 1 : -1;
        });
        console.log(sortedNotes);
        this.setState({ filteredNotes: sortedNotes });
        break;
      case "Z-A":
        let reverseSort = this.state.filteredNotes.sort((a, b) => {
          return a.title > b.title ? -1 : 1;
        });
        this.setState({ filteredNotes: reverseSort });
        break;
      default:
    }
  };

  handleSaveNote = (addToRightPanel, e) => {
    e.preventDefault();
    console.log(addToRightPanel);
    fetch(
      `http://localhost:3000/api/v1/notes/${addToRightPanel.addToRightPanel.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addToRightPanel.addToRightPanel),
      }
    )
      .then((response) => response.json())
      .then((freshNote) => {
        this.setState((prevState) => {
          return {
            filteredNotes: prevState.filteredNotes.map((n) =>
              n.id === freshNote.id ? freshNote : n
            ),
          };
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Search
          handleFilter={this.handleFilter}
          notes={this.state.notes}
          handleSort={this.handleSort}
        />
        <div className="container">
          <Sidebar
            notes={this.state.notes}
            handleClick={this.handleClick}
            handleNewNote={this.handleNewNote}
            filteredNotes={this.state.filteredNotes}
            handleClickCancel={this.handleClickCancel}
            handleSort={this.handleSort}
          />
          <Content
            addToRightPanel={this.state.addToRightPanel}
            handleEdit={this.handleEdit}
            editSelectedNote={this.state.editSelectedNote}
            handleEditedChange={this.handleEditedChange}
            handleSaveNote={this.handleSaveNote}
            handleCancel={this.handleCancel}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
