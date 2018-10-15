import React,{Component} from 'react';


import { List, InputItem, Switch, Stepper, Range, Button } from 'antd-mobile';

import axios from 'axios';
import '../inedx.scss';
const Item = List.Item;
const Brief = Item.Brief;


class AllCategory extends Component{
    constructor(){
        super();
        this.state={
            datas:[]
        }
    }
    componentDidMount(){
        axios.get('/api2/allCategories/').then(res=>{
            console.log("分类:",res)
            this.setState({
                datas:JSON.parse(res.data.data) 
            })
            console.log(this.state.datas)
        })
    }
    render(){
        return (
            <div className="allCategories">
                <form>
                    <List>
                    {this.state.datas.map((item)=>{
                            return(
                                <Item key={item.param}>
                                    {
                                        item.lists.map((list,id)=>{
                                            return <span key={id} >{list.name}</span>
                                        })
                                    }
                                </Item>   
                            )
                    })}
                    </List>
                </form>
            </div>
        )
    }
}


export default AllCategory;