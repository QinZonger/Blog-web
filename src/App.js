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
       <div className="ani" ref="ani"></div>
      </div>
    );
  }
  randomnum( min, max ){
    return Math.floor(Math.random() * ( max-min+1 ) + min)
  }
  ani () { //动画
    let H =this.refs.ani.offsetHeight;
    let W =this.refs.ani.offsetWidth;
    let elehtml = '';
    //最初生成
    for ( var i = 0; i<this.randomnum(20,50) ; i ++ ) {
       let eleW = this.randomnum(50, 100) + 'px';
       let eletop =  this.randomnum( 100 , H ) - 100 + 'px';
       let eleleft = this.randomnum( 0 , W) + 'px';
       elehtml += `<img ref="reactimg" style="width:${eleW} ; position: absolute;left : ${eleleft} ; top : ${eletop}; " src=${imgReact} />`
    }
    //
    this.refs.ani.innerHTML=elehtml;
    console.log(H,W)
  }
  componentDidMount(){
     this.ani()
  }
}

export default App;
