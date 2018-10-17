import React,{Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import './log.scss';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Log extends Component{
    constructor(){
        super();

    }
    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
      }));
    showShareActionSheetMulpitleLine = () => {
        const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
        ActionSheet.showShareActionSheetWithOptions({
          options: data,
          message: 'I am description, description, description',
        },
        (buttonIndex, rowIndex) => {
          this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
        });
      }
		logCancel(path){
			console.log(88)
			let {history} = this.props;
			history.push({pathname:path})
		}
    render(){
        return (
            <div className="login">
                <span className="cancel" onClick={this.logCancel.bind(this,'/mine')}>取消</span>
                <p className="tel-txt">请输入手机号</p>
                <div className="input">
                    <input type="tel" placeholder="请输入手机号" />
                    <input type="button" value="下一步" />
                </div>
                <div>
                    <WingBlank>
                        <WhiteSpace/>
                        <Button onClick={this.showShareActionSheetMulpitleLine}>其他登录方式</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
Log = withRouter(Log);
export default Log;