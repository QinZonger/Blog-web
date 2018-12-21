import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import {num} from './method/index'
import Card from 'antd/lib/card';
import { Input ,Button ,Select} from 'zent';
import 'zent/css/index.css';
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
  state = {
    value :'',
    show: "谷歌",
    selectedValue: '1'
  }
  // onChange = (e) => {
  //   this.setState({
  //     value: e.target.value
  //   })
  // }
  // onClick(){
  //   console.log(this.state.value)
  // }
  showOption(e,data){
    this.setState({
      show : data.name,
      selectedValue: data.value
    })
  }
  render() {
    const { Meta } = Card;
    const data = [
      {id: 1, name: '谷歌'},
      {id: 2, name: '百度'},
    ];
    return (
      <div className="box">
      <header ref="head" className="header">
        <div className="left">1</div>
        <div className="search">
            <div className="ser">
            {
               this.state.show === '谷歌'
               ?
               <form method="get" action="http://www.google.com/search"  target="_blank"> <input type="text" name="q" size="40"/><input type="submit" name="btnG" value="搜索"/> </form>
               :
               <form action="http://www.baidu.com/baidu" target="_blank"> <input type="text" name="word" size="40"/><input type="submit" value="搜索"/> </form>
            }
          <Select
            data={data}
            optionValue="id"
            optionText="name"
            onChange={this.showOption.bind(this)}
            value={this.state.selectedValue}
          />
          </div>
        </div>
        <div className="right">2</div>
      </header>
      <div className="App" ref="app">
      <div className="left-ani" ref="left"></div>
      <section>
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
          cover={<img alt="example" src='http://5b0988e595225.cdn.sohucs.com/images/20170927/92725f3bb28a4da8aa291785a22ac461.jpeg' />}
        >
          <Meta
            title="WEB 前端"
            description="www.instagram.com"
          />
        </Card></Link>        
      </section>
      <div className="right-ani" ref="right"></div>
      </div>
      </div>
    );
  }
  randomnum( min, max ){
    return Math.floor(Math.random() * ( max-min+1 ) + min)
  }
  ani (arr) { //动画
    let H =this.refs.left.offsetHeight;
    let W =this.refs.left.offsetWidth;
    let allimg='';
    for ( var j = 0 ; j < arr.length ; j++ ){
      let elehtml = '';
      //最初生成
      for ( var i = 0; i<this.randomnum(2,4) ; i ++ ) {
         let eleW = this.randomnum(20, 30) + 'px';
         let eletop =  this.randomnum( 30 , H ) - 30 + 'px';
         let eleleft = this.randomnum( 30 , W) - 30 + 'px';
         elehtml += `<img ref="reactimg" style="width:${eleW} ; position:absolute; left : ${eleleft} ; top : ${eletop}; " src=${arr[j]} />`
      }
      //elehtml
      allimg += elehtml
    }
    //this.refs.left.innerHTML=allimg;
    //this.refs.right.innerHTML=allimg;
  }
  componentDidMount(){
     let arrImg = [ imgReact, imgEgg, imgNode, imgDocker, imgJs, imgKoa, 
                   imgMarko, imgMysql, imgNpm, imgPython, imgRedux, imgTravis
                   , imgVue, imgWebpack
     ]
     this.ani(arrImg)
  }
}

export default App;
