import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Search from './Search'

class Title extends React.Component{
    render(){
        return (
            <div>
                <NavBar
                style={{background:"yellow"}}
                mode="dark"
                leftContent="Back"
                rightContent={[
                <Icon key="1" type="ellipsis" />,
                ]}
            >
                <input type="text"/>
            </NavBar>
            </div>
        )
    }
}

export default Title;




