import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  static propTypes = {

  }

  render() {
    return (
      <header className="header">
        {this.props.children}
      </header>
    )
  }
}
