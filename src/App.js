import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';
import './common.css';
import imgReact from './image/react.png'
class App extends Component {
  render() {
    return (
      <div className="App">
       <header></header>
       <div className="ani"></div>
       {/* <li><Link to="/index">Home</Link></li>
       <img className="app-img" src={imgReact} alt="" /> */}
      </div>
    );
  }
}

export default App;
