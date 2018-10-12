import React,{Component} from 'react';
import PropTypes from 'prop-types';


class HomeList extends Component{
    constructor(props){
        super();
        this.state = {
            items:props.data
        }
    }
    componentDidMount(){
        console.log(this.props.data)
    }
    render(){
        return(
            <div>
            {   
                this.state.items.map((item,idx)=>{
                    return <div className="homelist" key={idx}>
                        <div>
                            <div><i></i><span>{item.title}</span>
                            </div>
                            <span>收藏</span>
                        </div>
                        <p>{item.seriesCount}</p>
                        <ul>
                            {
                                /*item.seriesVos.map((list,idx)=>{
                                    return <li key={idx}>
                                        <img src={list.imageUrl} />
                                        <p>{list.videoName}</p>
                                    </li>
                                })*/
                            }
                        </ul>
                    </div>
                })
                    

            
            }
            </div>
            
        )
    }
}
HomeList.contextTypes = {
    data:PropTypes.array
}

export default HomeList;