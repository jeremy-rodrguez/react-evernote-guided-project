import React, { Component } from "react";

class NoteEditor extends Component {
  render() {
    return (
      <form
        className="note-editor"
        onSubmit={(e) => this.props.handleSaveNote(this.props, e)}
      >
        <input
          type="text"
          name="title"
          value={this.props.addToRightPanel.title}
          onChange={this.props.handleEditedChange}
        />
        <textarea
          name="body"
          value={this.props.addToRightPanel.body}
          onChange={this.props.handleEditedChange}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={() => this.props.handleCancel()}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
