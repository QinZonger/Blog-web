import React, { Component } from 'react';
import { Card } from 'antd';
import Highlight from 'react-highlight'
import { connect } from "react-redux";
import store from "../../redux/store";
import Control from '../ch/control'
import './dva.css'
class Dva extends Component {
      state = {
          name :["DVA 脚手架","Model"],
      }
      render() {
      const names = {
          pa : this.state.name,
          top : this.refs.card
      } 
      console.log(store.getState().control,'-----top')
      return (
          <div className="dva-box">
            <Control {...names}/>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card ref="card" title={this.state.name[0]} bordered={false} style={{ width: 1080 , scrollTop : store.getState().control}}>
                <p>1 : npm install dva-cli -g</p>
                <p>2 : dva new dva-quickstart</p>
                <p>3 : cd dva-quickstart npm start</p>
                </Card>
            </div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title={this.state.name[1]} bordered={false} style={{ width: 1080 }}>
                <p>model文件</p>
                <Highlight language="javascript">
                {`      export default {
                        namespace: 'detail',

                        state: {
                            object: {}
                        },

                        effects: {
                        *change({payload} , { call, put }) {
                                console.log(payload,'-----payload')
                                yield put({
                                    type: 'set',
                                    payload
                                })
                        }
                        },
                        reducers: {
                        set(state, action) {
                            console.log({...state,object:action.payload},'--{...state,object:action.payload}')
                            return {...state,object:action.payload}
                        }
                        }
                    }`}
                 </Highlight>
                <p>组件获取</p>
                <Highlight language="javascript">
                {`export default connect(({detail}) => ({
                    detail
                }))(Detail);`}
                </Highlight>
                <p>触发改变</p>
                <Highlight language="javascript">
                {`    const { dispatch } = this.props;
                dispatch({
                type: 'detail/change',
                payload: this.state.ob
                })`}
                </Highlight>
                </Card>
            </div>
          </div>

      )
            }
            componentDidMount(){
                
            }
            componentDidUpdate(){
                console.log(this.refs.card.props.style)
            }
  
}

const mapStateToProps = state => ({
    topd: state
});

export default connect(mapStateToProps)(Dva);