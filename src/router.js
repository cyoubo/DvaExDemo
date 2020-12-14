import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MainPage from './routes/MainPage/MainPage'
import ProductPage from './routes/ProductPage/ProductPage';
import ArcSeverLogPage from './routes/ArcServerLogPage/ArcSeverLogPage';

/**
 * 路由配置表构架函数
 */
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/countDemo" component = {MainPage}></Route>
        <Route path="/dataDemo" component = {ProductPage}></Route>
        <Route path="/AsLogDemo" component = {ArcSeverLogPage}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
