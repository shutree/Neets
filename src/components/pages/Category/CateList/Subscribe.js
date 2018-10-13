import React, {Component} from 'react';

import axios from 'axios';
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
            <div>
                <List>
                {this.state.data.map(item=>{
                        let photo = JSON.parse(item.photos)
                        return (<Item key={item.id} align="top" thumb={photo.small} multipleLine >{item.title}</Item>)
                    })}
                    
                    {/*this.state.data.map(item=>{
                        return (
                                <List.Item key={item.id} extra="10:30" align="top" thumb={item.photos.small} multipleLine>
                                  Title <Brief>subtitle</Brief>
                                </List.Item>
                        )
                    })*/}
                </List>
            </div>
        )
    }
}

export default Subscribe;