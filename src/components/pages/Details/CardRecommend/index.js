import React from 'react';
import './index.scss';

import { Card, Grid } from 'antd-mobile';

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

  render() {
    return (
      <div className="CardRecommend">
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
              data={everyOneWatching}
              columnNum={3}
              square={false}
              hasLine={false}
              renderItem={dataItem => <GridItem dataItem={dataItem} />}
            ></Grid>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardRecommend;
