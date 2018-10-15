import React, { Component } from 'react';
import AppNav from '../../commons/AppNav';
import { Route, NavLink, Redirect } from 'react-router-dom';
import AppTitle from '../../commons/title';
import Appnav from '../../commons/AppNav';
import Drawer from '../../commons/Drawer';

import CardMine from './CardMine';
import CardRecommend from './CardRecommend';
import Title from '../../commons/title';
import './index.scss';

import { Tabs, Badge, WhiteSpace } from 'antd-mobile';

let renderTabBar = (props) => {
  let goto = props.goToTab;
  let activeTab = props.activeTab;
  return (
    <div className="tabBar_wrapper">
      <span className={activeTab === 0 ? 'mine activeTab' : 'mine' } onClick={goto.bind(this, 0)} style={{}}>我的</span>
      <span className="division">|</span>
      <span className={activeTab === 1 ? 'recommend activeTab' : 'recommend' } onClick={goto.bind(this, 1)}>推荐</span>
    </div>
  )
}


class Details extends Component {
  render() {
    return (
      <div className="Details">
        <Tabs
          tabs={[{}, {}]}
          renderTabBar={renderTabBar}
        >
          <CardMine></CardMine>
          <CardRecommend></CardRecommend>
        </Tabs>
      </div>
    )
  }
}

export default Details;
