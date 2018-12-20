import React, { Component } from 'react';
import { Menu } from 'antd';
import './java.css'
import Dva from './pages/dva'
import Reacter from './pages/react'
import Js from './pages/js'
import Page from '../compents/ch/page'
const SubMenu = Menu.SubMenu;
class Index extends Component {
  state = {
    current: 'dva',
    alldate : [] , //总数据
    sleDate : {} // 筛选的数据
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  Select = () => { // 筛选函数
     let a = {} 
     this.state.alldate.forEach(( item, index) => {
        if(item.name == this.state.current){
          a = item
        }
     });
     return a
  }
  render() {
    let Ele =  Dva;
    if (this.state.current === 'react'){
      Ele = Reacter
    }else if(this.state.current === 'js'){
      Ele = Js
    }else if(this.state.current === 'dva'){
      Ele = Dva
    }else{
      Ele = Page
      this.Select() // 触发筛选函数
    }
    const pagedate= {
      date : this.Select() //筛选函数赋值
    }
    return (
      <div className="index">
        <div className="left-ani"></div>
        <section>
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="dva">
          Dva
        </Menu.Item>
        <Menu.Item key="react">
          React
        </Menu.Item>
        <Menu.Item key="js">
          JS
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper">工具</span>}>
            <Menu.Item key="github">Github</Menu.Item>
            <Menu.Item key="vscode">VsCode</Menu.Item>
        </SubMenu>
      </Menu>
      <div className="ele"><Ele { ...pagedate } /></div>
        </section>
        <div className="right-ani"></div>
      </div>
    );
  }
  getDate(){
     fetch('https://www.easy-mock.com/mock/5c1b265248952b7bd65143e1/date')
     .then( res => res.json() )
     .then( date => {
       this.setState({
          alldate : date
       })
     } )
  }
  componentDidMount(){
    this.getDate()
  }
}

export default Index;
