import React from 'react';
import Search from './Search';
import { Drawer, List,NavBar, Icon, Card, WingBlank, WhiteSpace } from 'antd-mobile';

import '../../assets/css/drawer.css'
import '../../assets/css/common.css'

class Title extends React.Component{
  state = {
    open: false,
    toggle:'none'
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open,
      toggle:''
     });
  }
  componentWillUpdate(){
    console.log(this.state.open)
    if(this.state.open){
      this.setState({
      toggle:"none"
     });
    }
  }

  render(){
     const sidebar = (<List>
      {['登录', '首页', '分类检索', '我的订阅', '已看完', '足迹', '提出登录'].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            multipleLine
          >
            <div className="login-txt">
              <div><img src="https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg"/></div>
              <span>立即登录</span>
              <p>登录解锁更多精彩内容</p>
            </div>
          </List.Item>);
        }
        return (<List.Item key={index}
           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >{i}</List.Item>);
      })}
    </List>);
    return (
      <div className="title app1">
        <NavBar
            style={{background:"yellow"}}
            mode="dark"
            leftContent="Back"
            rightContent={[
            <Icon key="1" type="ellipsis" />,
            ]}
            onLeftClick={this.onOpenChange}
        >
        <input type="text"/>
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight, display:this.state.toggle}}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
        {this.state.open?'neets':''}
        </Drawer>
      </div>
    )
  }
}

export default Title;




