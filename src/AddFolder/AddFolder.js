import React, { Component } from "react";
import ApiContext from "../ApiContext";
// import NotefulForm from "../NotefulForm/NotefulForm";
import config from "../config";
import propTypes from "prop-types";
import "./AddFolder.css";

export default class AddFolder extends Component {
  static contextType = ApiContext;

  addFolder = (name) => {
    fetch(`${config.API_ENDPOINT}/folders/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: `${this.context.folders.length + 1}`, name }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.context.addFolder(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        alert("An error has occurred!");
      });
  };

  handleSubmit(event) {
    event.preventDefault();
    const newFolder = event.target.newFolder.value;
    this.addFolder(newFolder);
  }

  render() {
    return (
      <header>
        <h2 className='addFolder-header'>Add Folder</h2>
        <form className='addFolder-form' onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='newFolder'>Folder Name</label>
          <input
            type='text'
            name='newFolder'
            id='newFolder'
            required
            min='3'
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </header>
    );
  }
}

AddFolder.propTypes = {
  history: propTypes.func.isRequired,
};
