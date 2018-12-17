import React, { Component } from 'react';
import Card from 'antd/lib/card';
import Highlight from 'react-highlight'
import './js.css'
let Js = () => {
  
      return (
          <div className="js-box">
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Js async await" bordered={false} style={{ width: 1080 }}>
                <p>a函数完成之后才会执行b函数</p>
                </Card>
                <Highlight language="javascript">
                {`let a = () => {
                        return new Promise((resolve, reject)=>{
                            setTimeout(()=>{
                                resolve('pp')
                            },2000)
                        })
                    }
                    let b = () => {
                        return new Promise((resolve, reject)=>{
                            setTimeout(()=>{
                                resolve('pp')
                            },3000)
                        })
                    }
                    let num = async (arr) => {
                        console.log('kais')
                        let as = await a()
                        console.log(as,'------as')
                        let bs = await b()
                        console.log(bs,'------bs')
                    }
                    export { num }`}
                 </Highlight>
            </div>
          </div>
      )
  
}
export default Js;