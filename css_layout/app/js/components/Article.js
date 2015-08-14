import React, { Component, PropTypes } from 'react';

export default class Article extends Component {
  render() {
    return (
      <article className="main">
        {this.props.children}
      </article>
    )
  }
}
