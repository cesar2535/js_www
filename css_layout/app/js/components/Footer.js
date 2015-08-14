import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {this.props.children}
      </footer>
    );
  }
}
