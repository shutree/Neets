import React,{Component} from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import axios from 'axios';


class Search extends Component{
    constructor(){
        super();
        this.state={
            value:'无双'
        }
    }

    componentDidMount(){
        axios.get('/api/full-texts/items?key=%E6%97%A0%E5%8F%8C&pageSize=4&pageNo=1').then(res=>{
            console.log(res)
        });
        axios.get('/api/full-texts/grab-datas/?key=%E6%97%A0%E5%8F%8C&pageSize=10&pageNo=1&seriesSize=1&themeSize=3').then(res=>{

        })
    }
    keySearch(val){
        
    }
    render(){
        return (
            <div>
              <WingBlank><div className="sub-title"></div></WingBlank>
               <SearchBar
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
              />
              <WhiteSpace />
            </div>
        )
    }
}


export default Search;