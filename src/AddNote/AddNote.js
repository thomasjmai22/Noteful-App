import React, { Component } from "react";
// import NotefulForm from "../NotefulForm/NotefulForm";
import config from "../config";
import ApiContext from "../ApiContext";
import "./AddNote.css";

export default class AddNote extends Component {
  static contextType = ApiContext;

  addNewNote = (note) => {
    fetch(`${config.API_ENDPOINT}/notes/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((resp) => resp.json())
      .then((note) => {
        this.context.addNote(note);
        this.props.history.push("/");
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    const newNote = {
      name: e.target.name.value,
      content: e.target.content.value,
      folderId: e.target.folder.value,
      modified: new Date(),
    };
    this.addNewNote(newNote);
  }

  render() {
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <form className='addNewNote' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='field'>
            <label htmlFor='note-name-input'>Name</label>
            <input type='text' name='name' required />
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>Content</label>
            <textarea id='note-content-input' name='content' />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>Folder</label>
            <select id='note-folder-select' name='folder'>
              <option value={null}>...</option>
              {this.context.folders.map((folder) => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>Add note</button>
          </div>
        </form>
      </section>
    );
  }
}
