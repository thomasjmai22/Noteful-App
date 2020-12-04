import React, { Component } from "react";

class Folders extends Component {
  render() {
    return (
      <div className='folder'>
        <h2>FOLDERS</h2>
        <ul>
          {this.props.folders.map((folder) => (
            <li>{folder.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Folders;
