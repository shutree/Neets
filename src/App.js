import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import AppHome from './components/pages/Home'
import AppCategory from './components/pages/Category'
import AppMine from './components/pages/Mine'
import AppTopic from './components/pages/Topic'
import AppDetails from './components/pages/Details'

import { NavBar, Icon,TabBar } from 'antd-mobile';

import axios from 'axios'




import './assets/css/common.css'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: false,
      };

  }

  go(path){
    console.log(666)

    let {history} = this.props;
    console.log(this.props)
    history.push({pathname:path})
  }
  render() {
    let {routes} = this.props
    return (

      <div className="App">
          <TabBar tabBarPosition="bottom" 
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="yellow"
            >
          {
            routes.map(item=>{
              return <TabBar.Item title={item.title} key={item.id}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}/>
                  }
                  selected={this.state.selectedTab === 'blueTab'}
                  onPress={this.go.bind(this,item.path)}
                  >
                  <Switch>
                  {routes.map(({id,path,component,render,exact})=>(
                    <Route key = {id} exact = {exact} path = {path} component = {component} render={render}/>
                    ))}
                  </Switch>
                  </TabBar.Item>
            })
          }
        </TabBar>
          
      </div>
    );
  }
}

App.defaultProps = {
  routes:[
    {id:1,path:'/',component:AppHome,title:'首页',exact:true},
    {id:2,path:'/category',component:AppCategory,title:'分类'},
    {id:3,path:'/details',component:AppDetails,title:'清单'},
    {id:4,path:'/mine',component:AppMine,title:'我的'},
    {id:5,path:'/topic',component:AppTopic,title:'话题'},
  ]
}



App= withRouter(App);


export default App;
