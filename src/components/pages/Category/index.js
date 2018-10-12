
import React, { Component } from 'react'
import AppNav from '../../commons/AppNav'
import { Route, NavLink, Redirect } from 'react-router-dom'
import AppTitle from '../../commons/title'
import Appnav from '../../commons/AppNav'
import Title from '../../commons/title'

class Category extends Component{
  render(){
    return(
        <div className="App">
          <Title/>
          <p>这是分类页</p>
        </div>
    )
  }
}

export default Category