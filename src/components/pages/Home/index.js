import React, { Component } from 'react'
import AppNav from '../../commons/AppNav'
import { Route, NavLink, Redirect } from 'react-router-dom'
import AppTitle from '../../commons/title'
import Appnav from '../../commons/AppNav'
import Swiper from '../../commons/swiper'
import HomeList from './HomeList/homelist'
import PropTypes from 'prop-types'
import { WhiteSpace } from 'antd-mobile';
import './index.scss'

import axios from 'axios';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    console.log('zhouyang');
    axios.get('/api/discover?pageNo=1&pageSize=10').then(res => {
      console.log(res)
      this.setState({
        data: res.data.list
      });
      console.log(this.state.data)
    })
  }

  getChildContext() {
    return {
      data: this.state.data
    }
  }

  render() {
    let items = this.state.data
    return (
      <div className="home">
        <AppTitle />
        <WhiteSpace size="xl" />
        <Swiper />
        <div className='hList'>
          {this.state.data.map((item, idx) => {
            return <div className="homelist" key={idx}>
              <div className="txt">
                <div className="title">
                  <h4><i></i><strong >{item.title}</strong></h4>
                  <p>{item.seriesCount}条类容</p>
                </div>
                <span className="collect">收藏</span>
              </div>
              
              <ul>
                {item.seriesVos.map((list, idx) => {
                  return <li key={idx}>
                    <a>
                      <img src={list.imageUrl} />
                      <p className="tit_vidoe">{list.videoName}</p>
                    </a>
                  </li>
                })}
              </ul>
            </div>
          })}
        </div>
				<WhiteSpace size="xl" />
        <AppNav/>
      </div>
    )
  }

}

Home.childContextTypes = {
  data: PropTypes.array
}

export default Home;
