import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Card from 'antd/lib/card';
import './App.css';
import './common.css';
import imgReact from './image/react.png'
import imgEgg from './image/egg.png'
import imgNode from './image/node.png'
import imgDocker from './image/docker.png'
import imgJs from './image/js.png'
import imgKoa from './image/koa.png'
import imgMarko from './image/marko.png'
import imgMysql from './image/mysql.png'
import imgNpm from './image/npm.png'
import imgPython from './image/python.png'
import imgRedux from './image/redux.png'
import imgTravis from './image/travis.png'
import imgVue from './image/vue.png'
import imgWebpack from './image/webpack.png'

class App extends Component {
  render() {
    const { Meta } = Card;
    return (
      <div className="box">
      <header></header>
      <div className="App" ref="app">
        <Card style={{ 
              width: 300 ,
              marginLeft :30,
              marginTop :30
                            
              }}>
        Welcome to here
        </Card>
        <Link to="index">
        <Card
          hoverable
          style={{ width: 300 ,marginLeft :30, marginTop :30}}
          cover={<img alt="example" src="" />}
        >
          <Meta
            title="javascript"
            description="www.instagram.com"
          />
        </Card></Link>
      </div>
      <div className="ani" ref="ani"></div>
      </div>
    );
  }
  randomnum( min, max ){
    return Math.floor(Math.random() * ( max-min+1 ) + min)
  }
  ani (arr) { //动画
    let H =this.refs.ani.offsetHeight;
    let W =this.refs.ani.offsetWidth;
    let allimg='';
    for ( var j = 0 ; j < arr.length ; j++ ){
      let elehtml = '';
      //最初生成
      for ( var i = 0; i<this.randomnum(5,10) ; i ++ ) {
         let eleW = this.randomnum(20, 30) + 'px';
         let eletop =  this.randomnum( 30 , H ) - 30 + 'px';
         let eleleft = this.randomnum( 30 , W) - 30 + 'px';
         elehtml += `<img ref="reactimg" style="width:${eleW} ; position:absolute; left : ${eleleft} ; top : ${eletop}; " src=${arr[j]} />`
      }
      //elehtml
      allimg += elehtml
    }
    this.refs.ani.innerHTML=allimg;
  }
  componentDidMount(){
     let arrImg = [ imgReact, imgEgg, imgNode, imgDocker, imgJs, imgKoa, 
                   imgMarko, imgMysql, imgNpm, imgPython, imgRedux, imgTravis
                   , imgVue, imgWebpack
     ]
     this.ani(arrImg)
     this.refs.app.style.left=this.refs.ani.offsetWidth/2 - 500 + 'px' ;
  }
}

export default App;
