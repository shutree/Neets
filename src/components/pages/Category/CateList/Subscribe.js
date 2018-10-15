import React, {Component} from 'react';

import axios from 'axios';
import '../inedx.scss';
import { List } from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;


class Subscribe extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/api2/searchByES/?pageNo=1&pageSize=10&country=&tags=&type=&year=&key=&week=&order=1&state=').then(res=>{
            this.setState({
                data:res.data.data.list
            })
            console.log(this.state.data)
        })
    }

    render(){
        return (
            <div className="Subscribe">
                <List>
                {this.state.data.map(item=>{
                        let photo = JSON.parse(item.photos)
                        return (<Item key={item.id} align="top" multipleLine >
                            <div className="front-img">
                                <img src={photo.large} style={{width:100,heigh:100}}/>
                            </div>
                            <div className="video-content">
                                <p>{item.title} <span>{item.rating}</span> <span>订阅</span></p>
                                <span>{item.hot}</span>
                                <p><span>{item.countries}</span>/<span>{item.mainlandPubdate}</span></p>
                                <p><span>更新至{item.currentSeries}</span>/<span>共{item.episodesCount}</span></p>
                                <p>{item.refreshDesc}</p>
                            </div>
                            </Item>
                            )
                    })}
                    
                </List>
            </div>
        )
    }
}

export default Subscribe;