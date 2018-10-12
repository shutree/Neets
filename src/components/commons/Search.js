import React,{Component} from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Search extends Component{
    render(){
        return (
            <div>
              <WingBlank><div className="sub-title"></div></WingBlank>
              <SearchBar placeholder="Search" maxLength={8} />
              <WhiteSpace />
            </div>
        )
    }
}


export default Search;