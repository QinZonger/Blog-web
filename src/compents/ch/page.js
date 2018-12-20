import React, { Component } from 'react'
import { Card } from 'antd';
import Highlight from 'react-highlight'
import './page.css'
class Page extends Component {
    render() {
        const { date } = this.props
        console.log(date,'----dd')
        return (
            <div className="page">
                {
                    date.date.map((item, index)=>{
                        return  ( 
                        <div style={{ background: '#ECECEC', padding: '30px' }} key="index">
                        <Card ref="card" title={item.page.title} bordered={false} style={{ width: 1080 }}>
                        <p>1 : npm install dva-cli -g</p>
                        <p>2 : dva new dva-quickstart</p>
                        <p>3 : cd dva-quickstart npm start</p>
                        </Card>
                        </div>
                       )
                    })
                }
            </div>
        )
    }
}

export default Page