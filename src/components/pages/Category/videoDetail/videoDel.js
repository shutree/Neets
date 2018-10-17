import React,{Component} from 'react';

import { List } from 'antd-mobile';
import axios from 'axios';

const Item = List.Item;
const Brief = Item.Brief;

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
            <div>
                <List>
                    <Item>
                        <div className="front-img">
                            <img src='' style={{width:100,heigh:100}}/>
                        </div>
                        <div className="video-content">
                            <p>机器人少女 <span>2018-08-18</span> <span>订阅</span></p>
                            <span>热度</span>
                            <p><span>日本</span>/<span>动漫</span></p>
                            <p><span>更新至3</span>/<span>共12</span></p>
                            <p>已完结</p>
                        </div>
                    </Item>
                </List>
                <div className="introduction">
                    <h4>简介</h4>
                    <p></p>
                </div>
                <List renderHeader={() => '合集'} className="my-list">
                    <Item extra={'extra content'}>Title</Item>
                </List>
                <div>
                    <h4>分集列表</h4>
                    <List renderHeader={() => '合集'} className="my-list">
                        <Item extra={'extra content'}>Title</Item>
                    </List>
                </div>
                <div>
                    <h4>Neets全网搜索</h4>
                    <List renderHeader={() => '合集'} className="my-list">
                        <Item extra={'extra content'}>Title</Item>
                    </List>
                </div>
            </div>
        )
        
    }
}


export default VideoDel;