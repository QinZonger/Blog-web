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
                {/* {
                    date.date.map((item, index)=>{
                        return  ( 
                        <div style={{ background: '#ECECEC', padding: '30px' }} key={index}>
                        <Card ref="card" title={item.page.title} bordered={false} style={{ width: 1080 }}>
                        {
                            date.date.page.num.map((value,key)=>{
                                return (
                                    <p key={key}>{value.text}</p>
                                )
                            })
                        }
                        </Card>
                        </div>
                       )
                    })
                } */}
            </div>
        )
    }
}

export default Page