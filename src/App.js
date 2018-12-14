import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <li><Link to="/index">Home</Link></li>
      </div>
    );
  }
}

export default App;
