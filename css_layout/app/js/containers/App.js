import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';
import Aside from '../components/Aside';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header>Header</Header>
        <Article>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </Article>
        <Aside className="aside aside-1">Aside-1</Aside>
        <Aside className="aside aside-2">Aside-2</Aside>
        <Footer>Footer</Footer>
      </div>
    );
  }
}
