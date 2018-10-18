import React,{Component} from 'react';

import { List ,NavBar, Icon } from 'antd-mobile';

import axios from 'axios';
import './index.scss';
const Item = List.Item;


class VideoDel extends Component{
    constructor(){
        super();
        this.state={
            source:[],
            series:[],
            allnet:[]
        }
    }

    componentDidMount(){
        axios.get('/api2Source/list/1/5?adapteType=0&enable=3&num=-1&videoId=9b19b45377054c8ebc8eeec9a0f76ed6&filter=1').then(res=>{
            console.log(res)
            this.setStat({
                source:res.data.list
            })
        });

        axios.get('/api2Series/list/9b19b45377054c8ebc8eeec9a0f76ed6/1/10?adapteType=0&enable=3').then(res=>{
            console.log('series:',res)
            this.setStat({
                series:res.data.list
            })
        });
        axios.get('/api1/api/full-text/videos/9b19b45377054c8ebc8eeec9a0f76ed6/grab-datas?pageNo=1&pageSize=6&seriesSize=1&themeSize=3&filter=1').then(res=>{
            console.log('全网:',res)
            this.setStat({
                allnet:res.data.list
            })
        });
    }

    render(){
        let item = this.props.data
        return (
            <div className="videodel">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                >详情</NavBar>   
                <List>
                    <Item>
                        <div className="front-img">
                            <img src='http://img.neets.cc/video/5H1hAxFEZwzZxiDMaD9i4u/large.jpg?x-oss-process=style/normal_webp' />
                        </div>
                        <div className="video-content">
                            <p className="itr">步履不停</p>
                            <p className="sub">订阅458</p>
                            <span>热度</span>
                            <p><span>日本</span>/<span>动漫</span></p>
                            <p><span>更新至3</span>/<span>共12</span></p>
                            <p>已完结</p>
                        </div>
                    </Item>
                </List>
                <div className="introduction">
                    <h4>简介</h4>
                    <p>人生路上步履不停，为何总是慢一拍”。
                        ↵位于偏远小镇的横山一家，生活平静祥和。父亲恭平（原田芳雄 饰）是业已退休的医生，却时时牵挂小镇诊所内的事务。长子纯平继承了父亲的事业，却在15年前为救落水儿童而溺水身亡。次子良多（阿部宽 饰）与父亲意见相左，执意前往异地当起了绘画修复师。多年的打拼换来的却是失业，困顿的良多与带着孩子的由香里（夏川结衣 饰）结婚，相互扶持，继续生活。
                        ↵又逢纯平的忌日，良多和姐姐千奈美（YOU 饰）带着家人分别赶回家中。平静的横山家再次热闹起来……
                        ↵本片荣获2009年蓝丝带最佳导演奖和最佳女配角奖（树木希林）、2008年报知电影和2009年电影旬报最佳女配角（树木希林）、2009年每日电影奖最佳男主角（阿部宽）、2008年马塔布拉塔国际电影节评审团大奖和最佳影片。</p>
                </div>
                <List renderHeader={() => '合集'} className="my-list">
                    <Item extra={'extra content'}>Title</Item>
                </List>
                <div>
                    <List renderHeader={() => '分集列表'} className="my-list">
                        <Item extra={'extra content'}>Title</Item>
                    </List>
                </div>
                <div>
                    <List renderHeader={() => 'Neets全网搜索'} className="my-list">
                        <Item extra={'extra content'}>Title</Item>
                    </List>
                </div>
            </div>
        )
        
    }
}


export default VideoDel;