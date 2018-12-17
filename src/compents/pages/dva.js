import React, { Component } from 'react';
import { Card } from 'antd';
import Highlight from 'react-highlight'
import './dva.css'
let Dva = () => {
  
      return (
          <div className="dva-box">
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="DVA 脚手架" bordered={false} style={{ width: 1080 }}>
                <p>1 : npm install dva-cli -g</p>
                <p>2 : dva new dva-quickstart</p>
                <p>3 : cd dva-quickstart npm start</p>
                </Card>
            </div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Model" bordered={false} style={{ width: 1080 }}>
                <p>1 : npm install dva-cli -g</p>
                <p>2 : dva new dva-quickstart</p>
                <p>3 : cd dva-quickstart npm start</p>
                </Card>
                <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight>
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
export default Dva;