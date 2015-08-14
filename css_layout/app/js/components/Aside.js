import React, { Component, PropTypes } from 'react';

export default class Aside extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    return (
      <aside className={this.props.className}>
        {this.props.children}
      </aside>
    );
  }
}
