import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from "react-redux";
import store from "../../redux/store";
import './control.css'
class Control extends Component {

    render(){
      const { pa , hand } = this.props
      return (
        <div className="con">
            {
              pa.map((item,index)=>{
                return (
                  <Button 
                  key={index}
                  onClick={hand}
                  >{item}</Button>
                )
              })
            }
        </div>
      )
    }
}
const mapStateToProps = state => ({
  
});
const mapDispatchToProps = ( dispatch , pwn) => {
  return {
    hand : () => {
      console.log('dis---')
      dispatch({
        type : "MACK",
        text : 1000
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Control);