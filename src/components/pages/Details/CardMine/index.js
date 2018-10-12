import React from 'react';
import './index.scss';

import { Card } from 'antd-mobile';

class CardMine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "追剧清单",
          content: "暂无"
        },
        {
          title: "我的清单",
          content: "暂无"
        },
        {
          title: "我的收藏的清单",
          content: "暂无"
        },
        {
          title: "已看完",
          content: "暂无"
        },
      ]
    }
  }

  render() {
    return (
      <div className="CardMine">
        <Card full>
          {
            this.state.cards.map((card, index) => {
              return  <Card.Body>
                            <h4>追剧清单</h4>
                            暂无
                      </Card.Body>
            })
          }

        </Card>
      </div>
    );
  }
}

export default CardMine;
