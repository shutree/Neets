import React, { Component } from 'react';
import AppNav from '../../commons/AppNav';
import { Route, NavLink, Redirect } from 'react-router-dom';
import AppTitle from '../../commons/title';
import Appnav from '../../commons/AppNav';
import Drawer from '../../commons/Drawer';

import CardMine from './CardMine';
import CardRecommend from './CardRecommend';

import './index.scss';

import { Tabs, Badge } from 'antd-mobile';


class Details extends Component {
  render() {
    return (
      <div className="Details">
        <Tabs tabs={[{ title: <Badge>我的</Badge> },{ title: <Badge>推荐</Badge> }]}>
          <CardMine></CardMine>
          <CardRecommend></CardRecommend>
        </Tabs>
      </div>
    )
  }
}

export default Details;
