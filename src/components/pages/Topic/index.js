import React, { Component } from 'react'
import AppNav from '../../commons/AppNav'
import { Route, NavLink, Redirect } from 'react-router-dom'
import AppTitle from '../../commons/title'
import Appnav from '../../commons/AppNav'
import Swiper from '../../commons/swiper'
import { WhiteSpace } from 'antd-mobile';

class Topic extends Component{
  render(){
    return(
      <div>
        <AppTitle/>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <Swiper/>
        <WhiteSpace/>
      </div>
    )
  }
}

export default Topic
