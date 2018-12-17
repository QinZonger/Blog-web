import React, { Component } from 'react';
import Card from 'antd/lib/card';
import Highlight from 'react-highlight'
import './react.css'
let Reacter = () => {
  
      return (
          <div className="react-box">
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="REACT 脚手架" bordered={false} style={{ width: 1080 }}>
                <p>1 : npm install -g create-react-app</p>
                <p>2 : create-react-app my-app</p>
                <p>3 : npm run start</p>
                </Card>
            </div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="React 生命周期" bordered={false} style={{ width: 1080 }}>
                <h4>(旧)</h4>
                <Highlight language="javascript">
                {`UNSAFE_componentWillMount()`}
                 </Highlight>
                <p>挂载之前触发</p>
                <Highlight language="javascript">
                {`render()`}
                </Highlight>
                <p>渲染dom</p>
                <Highlight language="javascript">
                {`componentDidMount()`}
                </Highlight>
                <p>挂载完成后</p>
                <Highlight language="javascript">
                {`UNSAFE_componentWillReceiveProps(nextProps)`}
                </Highlight>
                <p>props发生变化以及父组件重新渲染</p>
                <p>nextProps : 接收父元素的传来的值</p>
                <Highlight language="javascript">
                {`  shouldComponentUpdate(nextProps, nextState){
                    return true
                }`}
                <p>判断是否更新组件</p>
                </Highlight>
                <Highlight language="javascript">
                {`UNSAFE_componentWillUpdate(nextProps, nextState)`}
                </Highlight>
                <p>更新之前</p>
                <Highlight language="javascript">
                {`componentDidUpdate(props, state)`}
                </Highlight>
                <p>更新后立即执行</p>
                <Highlight language="javascript">
                {`componentWillUnmount()`}
                </Highlight>
                <p>组件卸载</p>
                <h4>新</h4>
                <Highlight language="javascript">
                {`static getDerivedStateFromProps(nextProps, prevState)`}
                </Highlight>
                <Highlight language="javascript">
                {`getSnapshotBeforeUpdate(prevProps, prevState)`}
                </Highlight>
                </Card>
            </div>
          </div>
      )
  
}
export default Reacter;