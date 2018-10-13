import React, { Component } from 'react'
import { Carousel, WingBlank, WhiteSpace} from 'antd-mobile';


class Swiper extends Component{
    state = {
        data: [],
        imgHeight: 50,
      }
      
    componentDidMount() {
        // simulate img loading
        
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }

    render(){
        return (
            <div>
                <Carousel
                  autoplay={false}
                  infinite
                >
                  {this.state.data.map((url,idx) => (
                    <a key={idx} href="#">
                      <img  src={`https://zos.alipayobjects.com/rmsportal/${url}.png`} />
                    </a>
                  ))}
                </Carousel>
            </div>
        )
    }
}


export default Swiper;