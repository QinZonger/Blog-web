import React from 'react'
//这里的HashRouter是一个的路由的模式，它分为两种BrowserRouter以及HashRouter两种模式  使用的方法只是在导入时有区别，后面的代码完全一致即可
import {HashRouter as Router, Route, Switch} from 'react-router-dom'  
import App from '../App'
import Index from '../compents/index'

export default class RouteComponent extends React.Component {
     render() {
         return (
                 <React.Fragment>
                     <Router>
                         <React.Fragment>
                             <Switch>
                                 <Route path='/' exact component={App}></Route>
                                 <Route path='/index' exact component={Index}></Route>
                             </Switch>
                         </React.Fragment>
                     </Router>
                 </React.Fragment>    
         );
     }
}