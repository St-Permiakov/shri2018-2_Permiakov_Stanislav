import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './blocks/header/header';
import Footer from './blocks/footer/footer';
import Grid from './blocks/grid/grid';

class App extends Component {
    render() {
      return ([
        <Header key="header" />,
        <main className="Main">
            <h2 className="Main-Title">Лента событий</h2>
            <Grid key="grid" />
        </main>,
        <Footer key="footer" />
    ]);
  }
}

export default App;
