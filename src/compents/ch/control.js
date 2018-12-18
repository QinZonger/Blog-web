import React, { Component } from 'react';
import { Button } from 'antd';
import './control.css'
class Control extends Component {

    render(){
      const { pa , top } = this.props
      return (
        <div className="con">
            {
              pa.map((item,index)=>{
                return (
                  <Button key={index}>{item}</Button>
                )
              })
            }
        </div>
      )
    }

}
export default Control;