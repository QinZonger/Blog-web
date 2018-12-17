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
export default Dva;