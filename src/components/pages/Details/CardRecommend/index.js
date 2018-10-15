import React from 'react';
import './index.scss';

import { Card, Grid, ListView } from 'antd-mobile';

let HotData = Array.from(new Array(9)).map(() => ({
  icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg',
  text: `下半年不能错过的...`
}));

let everyOneWatching = Array.from(new Array(35)).map(() => ({
  icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg',
  text: `大家都在看`
}));


let GridItem = ({ dataItem }) => {
  return (
    <div className="grid_item">
      <img src={dataItem.icon} style={{ width: '100%' }} alt="" />
      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
        <span>{dataItem.text}</span>
      </div>
    </div>
  );
}


class CardRecommend extends React.Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      everyOneWatching,
      isLoading: false
    }
  }

  componentDidMount() {
    this.container.onscroll = () => {
      let allHeight = this.wrapper.clientHeight;
      let scrollTop = this.container.scrollTop;
      let b = allHeight - scrollTop;
      if (b < 650) {
        if(this.state.isLoading) return;
        this.setState({isLoading: true});
        let newArrData = [
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          },
          {
            "icon": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122642515,690172968&fm=26&gp=0.jpg",
            "text": "大家都在看"
          }
        ]

        setTimeout(() => {
          this.setState({
            everyOneWatching: [...this.state.everyOneWatching, ...newArrData]
          });
          this.setState({isLoading: false});
        }, 5000);
      }
    }
  }

  render() {
    // const row = (rowData, sectionID, rowID) => {
    //   return (
    //     <div 
    //       key={rowID}
    //       style={{
    //         padding: '0 15px',
    //         backgroundColor: '',
    //       }}
    //     >
    //       zhouyang
    //     </div>
    //   );
    // };
    return (
      <div className="CardRecommend" ref={el => this.container = el}>

        {/* <ListView
          dataSource={this.state.dataSource}
          renderRow={row}
        /> */}
          <div ref={el => this.wrapper = el}>
            <Card full>
              <Card.Body className="card_body">
                <h3>热门HOT</h3>
                <Grid
                  className="zhouyang_grid"
                  data={HotData}
                  columnNum={3}
                  square={false}
                  hasLine={false}
                  renderItem={dataItem => <GridItem dataItem={dataItem} />}
                ></Grid>
              </Card.Body>
            </Card>
            <div className="division"></div>
            <Card full>
              <Card.Body className="card_body">
                <h3>大家都在看</h3>
                <Grid
                  data={this.state.everyOneWatching}
                  columnNum={3}
                  square={false}
                  hasLine={false}
                  renderItem={dataItem => <GridItem dataItem={dataItem} />}
                ></Grid>
              </Card.Body>
            </Card>
          </div>

      </div>
    );
  }
}

export default CardRecommend;
