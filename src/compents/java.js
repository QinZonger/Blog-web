import React, { Component } from 'react';
import Card from 'antd/lib/card';
import './java.css'
class Index extends Component {
  render() {
    return (
      <div className="index">
        <section>
        <p className="top-p"></p>
        <Card style={{ 
              width: 300 ,
              marginLeft :30,
              fontSize: 20
              }}>
        JAVASCRIPT
        </Card>
        <div className="con"></div>
        </section>
      </div>
    );
  }
}

export default Index;
