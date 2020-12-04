import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Note.css";
import config from "../config";
import ApiContext from "../ApiContext";

// export default function Note(props) {
export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => {},
  };

  static contextType = ApiContext;
  //added delete button and fetch
  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { name, id, modified } = this.props;
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}> {name} </Link>
          {/* <Link to={`/note/${props.id}`}>{props.name}</Link>  */}
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
          //add onClick to handle DELETE
        >
          <FontAwesomeIcon icon='trash-alt' /> remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified{" "}
            <span className='Date'>
              {format(modified, "Do MMM YYYY")}
              {/* deleted props from props.modified */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
