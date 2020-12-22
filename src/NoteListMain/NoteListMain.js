import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Note from "../Note/Note";
import CircleButton from "../CircleButton/CircleButton";
import "./NoteListMain.css";
import { getNotesForFolder } from "../notes-helpers";
import propTypes from "prop-types";
import ApiContext from "../ApiContext";

export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { folderId } = this.props.match.params;

    const notes = folderId
      ? getNotesForFolder(this.context.notes, folderId)
      : this.context.notes;

    return (
      <section className='NoteListMain'>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Note {...note} />
            </li>
          ))}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    );
  }
}
NoteListMain.propTypes = {
  match: propTypes.object,
};

// export default function NoteListMain(props) {
//   return (
//     <section className='NoteListMain'>
//       <ul>
//          CHANGED FROM PROPS
//         {props.notes.map((note) => (
//           <li key={note.id}>
//             <Note id={note.id} name={note.name} modified={note.modified} />
//           </li>
//
