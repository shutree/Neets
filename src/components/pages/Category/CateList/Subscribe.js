import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import axios from 'axios';
import '../index.scss';
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
	
	go(path){
		let {history} = this.props;
		history.push({
			pathname:path
		})
	}
    render(){
        return (
            <div className="Subscribe">
                <List>
                {this.state.data.map(item=>{
                        let photo = JSON.parse(item.photos)
                        return (<Item key={item.id} align="top" multipleLine onClick={this.go.bind(this,'/video')} >
                            <div className="front-img">
                                <img src={photo.large} style={{width:100,heigh:100}}/>
                            </div>
                            <div className="video-content">
                                <p>{item.title} <span className="rate">{item.rating}</span> <span className="subs">订阅</span></p>
                                <span className="hot">{item.hot}</span>
                                <p><span>{item.countries}/</span><span>{item.mainlandPubdate}</span></p>
                                <p><span>更新至{item.currentSeries}/</span><span>共{item.episodesCount}</span></p>
                                <span>{item.refreshDesc}</span>
                            </div>
                            </Item>
                            )
                    })}
                </List>
            </div>
        )
    }
}
Subscribe = withRouter(Subscribe);
export default Subscribe;