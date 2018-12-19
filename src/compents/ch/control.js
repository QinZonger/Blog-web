import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from "react-redux";
import store from "../../redux/store";
import './control.css'
class Control extends Component {
    state = {
      a : 1
    }
    render(){
       const { pa ,top , hand } = this.props
      return (
        <div className="con">
            {
              pa.map((item,index)=>{
                return (
                  <Button 
                  key={index}
                  onClick={this.hand.bind(this,index)}
                  >{item}</Button>
                )
              })
            }
        </div>
      )
    }
     hand (index){
      const { arr } = this.props
      window.scrollTo(0,arr[index])
    }
}
const mapStateToProps = state => ({
  
});
const mapDispatchToProps = ( dispatch , pwn) => {
  return {
    // hand : () => {
    //   window.scrollTo(0,pwn.arr[1])
    //   console.log(pwn.arr,'---pwd')
    //   dispatch({
    //     type : "MACK",
    //     text : pwn.arr[1]
    //   })
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Control);