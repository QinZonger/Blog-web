import React, { Component } from 'react';
import Card from 'antd/lib/card';
import Highlight from 'react-highlight'
import Control from '../ch/control'
import './react.css'
class Reacter extends Component {
    state = {
        name :["REACT 脚手架","React 生命周期","react redux 的使用"]
    }
    render() {
        const names = {
            pa : this.state.name
        } 
      return (
          <div className="react-box">
            <Control {...names}/>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title={this.state.name[0]} bordered={false} style={{ width: 1080 }}>
                <p>1 : npm install -g create-react-app</p>
                <p>2 : create-react-app my-app</p>
                <p>3 : npm run start</p>
                </Card>
            </div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title={this.state.name[1]} bordered={false} style={{ width: 1080 }}>
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
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card ref="card" title={this.state.name[2]} bordered={false} style={{ width: 1080 }}>
                <p>1 : npm install react-redux --save-dev  npm install redux --save-dev</p>
                <Highlight language="javascript">
                {`import { Provider } from 'react-redux'
                import store from "./redux/store";

                ReactDOM.render(
                            <Provider store={store}>
                            <Index />
                            </Provider>,
                            document.getElementById('root')
                );`}
                </Highlight>
                <p>2 : 第一级 index.js文件修改</p>
                <Highlight language="javascript">
                {`import { createStore } from 'redux';
                import rootReducer from './reducer/index';

                const store = createStore(rootReducer)

                export default store;`}
                </Highlight>
                <p>3 : 创建redux文件夹 在此文件夹下创建store.js文件</p>
                <Highlight language="javascript">
                {`import { combineReducers } from 'redux';

                import control from './control';

                // index.js
                const rootReducer = combineReducers({
                    control
                })

                export default rootReducer;`}
                </Highlight>
                <Highlight language="javascript">
                {`export default (state = 0, action) => {
                    switch (action.type) {
                        case "MACK" : return action.text
                        break;
                        default: return state;
                    }
                    //control.js
                };`}
                </Highlight>
                <p>4 : 在redux文件夹下创建reducer文件夹，reducer文件夹下index.js文件 以及control.js </p>
                <Highlight language="javascript">
                {`
                // 引入
                import { connect } from "react-redux";
                import store from "../../redux/store";
                store.getState().control //获取值

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
                `}
                </Highlight>
                <p>5 : 在组件中使用 （ 调用 mapDispatchToProps 则必须有mapStateToProps，即使mapStateToProps不调用）</p>
                </Card>
            </div>
          </div>
      )
    }
}
export default Reacter;