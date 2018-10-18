
import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import '../../assets/css/common.css'
import axios from 'axios';
import { NavBar, Icon, TabBar  } from 'antd-mobile';

class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页',
      hidden: false,
      fullScreen: false,
    };
		
		
  }
  render() {
    let { routes } = this.props
		console.log(this.state.selectedTab)
    return (
      <div className="nav">
        <TabBar 
          tabBarPosition="bottom"
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="yellow"
        >
          {routes.map(item => {
            return (
							<TabBar.Item title={item.title} key={item.id}
								icon={<div style={{
									width: '22px',
									height: '22px',
									background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
								}} />
								}
								selected={this.state.selectedTab === item.title}
								selectedIcon={<div style={{
									width: '22px',
									height: '22px',
									background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
								}}
								/>
								}
								onPress={() => {
									this.setState({
										selectedTab: item.title
									})
									let { history } = this.props;
									history.push({ pathname: item.path })
								}}
							>
							
							</TabBar.Item>
						)
          })}
        </TabBar>
      </div>
    );
  }
}

AppNav.defaultProps = {
  routes: [
    { id: 1, name: "name", path: '/',  title: '首页', exact: true },
    { id: 2, name: "category", path: '/category',  title: '分类' },
    { id: 3, name: "details", path: '/details',  title: '清单' },
    { id: 4, name: "mine", path: '/mine',  title: '我的' },
    { id: 5, name: "topic", path: '/topic',  title: '话题' },
  ]
};


AppNav= withRouter(AppNav);
export default AppNav;


