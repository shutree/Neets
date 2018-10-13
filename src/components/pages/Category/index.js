
import React, { Component } from 'react';
import AppNav from '../../commons/AppNav';
import { Route, NavLink, Redirect } from 'react-router-dom';
import AppTitle from '../../commons/title';
import Appnav from '../../commons/AppNav';
import Title from '../../commons/title';
import AllCategory from './CateList/allCategory';
import Subscribe from './CateList/Subscribe';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


class Category extends Component{
  render(){
    return(
        <div className="App">
          <Title/>
          <AllCategory/>
          <Subscribe/>
        </div>
    )
  }
}

export default Category