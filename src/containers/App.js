import React, { Component } from 'react';
import Header from '../components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
