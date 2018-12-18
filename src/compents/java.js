import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './java.css'
import Dva from './pages/dva'
import Reacter from './pages/react'
import Js from './pages/js'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Index extends Component {
  state = {
    current: '',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    let Ele =  Dva;
    if (this.state.current === 'react'){
        Ele = Reacter
    }else if(this.state.current === 'js'){
      Ele = Js
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
        <SubMenu title={<span className="submenu-title-wrapper">Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 31</Menu.Item>
            <Menu.Item key="setting:2">Option  2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
      <div className="ele"><Ele/></div>
        </section>
        <div className="right-ani"></div>
      </div>
    );
  }
  componentDidMount(){
    console.log(Dva)
  }
}

export default Index;
