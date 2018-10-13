import React, { Component } from 'react'
import AppNav from '../../commons/AppNav'
import { HashRouter as Router, Route, NavLink, Redirect, withRouter } from 'react-router-dom'
import AppTitle from '../../commons/title'
import Appnav from '../../commons/AppNav'
import AppLog from '../../pages/log/log'


import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Mine extends Component {
	constructor(props) {
		super();
		let url = props.match.url;
	}
	toLog(path) {
		let { history } = this.props;
		history.push({ pathname: path })
	}
	render() {
		return (
			<div>
					<AppTitle/>
					<List>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal" onClick={this.toLog.bind(this,'/login')}>立即登录</Item>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">足迹</Item>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">反馈</Item>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">设置</Item>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">手机号</Item>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">关于</Item>
						<Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">免责声明</Item>
					</List>
					<Route path={this.props.match.path + '/:login'} component={AppLog}/>
			</div>
		)
	}
}

Mine = withRouter(Mine);

export default Mine;
