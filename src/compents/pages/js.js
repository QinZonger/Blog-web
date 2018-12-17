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
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Symbol 数据类型" bordered={false} style={{ width: 1080 }}>
                <p>ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
                </Card>
                <Highlight language="javascript">
                {`var mySymbol = Symbol();
                // 第一种写法
                var a = {};
                a[mySymbol] = 'Hello!';
                // 第二种写法
                var a = { [mySymbol]: 'Hello!'};
                // 第三种写法
                var a = {};
                Object.defineProperty(a, mySymbol, { value: 'Hello!' });
                // 以上写法都得到同样结果
                a[mySymbol] // "Hello!"
                `}
                 </Highlight>
            </div>
          </div>
      )
  
}
export default Js;