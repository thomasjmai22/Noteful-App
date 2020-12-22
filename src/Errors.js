import React, { Component } from "react";
import propTypes from "prop-types";

export default class Errors extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong here.</h2>;
    }
    return this.props.children;
  }
}

Errors.propType = {
  children: propTypes.object,
};
