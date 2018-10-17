import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AppHome from './components/pages/Home';
import AppCategory from './components/pages/Category';
import AppMine from './components/pages/Mine';
import AppTopic from './components/pages/Topic';
import AppDetails from './components/pages/Details';
import Login from './components/pages/log/log';
import Search from './components/commons/Search';
import VideoDel from './components/pages/Category/videoDetail/videoDel';

import { NavBar, Icon, TabBar } from 'antd-mobile';

import axios from 'axios';


import './assets/css/common.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas:[
        { id: 1, name: "name", path: '/', component: AppHome, title: '首页', exact: true },
        { id: 2, name: "category", path: '/category', component: AppCategory, title: '分类' },
        { id: 3, name: "details", path: '/details', component: AppDetails, title: '清单' },
        { id: 4, name: "mine", path: '/mine', component: AppMine, title: '我的' },
        { id: 5, name: "topic", path: '/topic', component: AppTopic, title: '话题' },
      ]
    };
  }

 render(){
  return(
    <Switch>
      {this.state.datas.map(({id,path,component,render,exact})=>(
          <Route key = {id} exact = {exact} path = {path} component = {component} render={render}/>
          ))}
      <Route path='/login' component={Login}/>
      <Route path='/search' component={Search}/>
      <Route path='/video' component={VideoDel}/>
    </Switch>
  )
 }
}

 


App.defaultProps = {
  routes: [
    { id: 1, name: "name", path: '/', component: AppHome, title: '首页', exact: true },
    { id: 2, name: "category", path: '/category', component: AppCategory, title: '分类' },
    { id: 3, name: "details", path: '/details', component: AppDetails, title: '清单' },
    { id: 4, name: "mine", path: '/mine', component: AppMine, title: '我的' },
    { id: 5, name: "topic", path: '/topic', component: AppTopic, title: '话题' },
  ]
};

App = withRouter(App);

export default App;
