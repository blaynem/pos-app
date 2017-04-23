import React, { Component } from 'react';
import Header from '../components/header'
import Menu from '../components/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
