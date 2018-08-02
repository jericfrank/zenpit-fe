import React from 'react';
import { Card } from 'antd';

const style = {
  card: {
    width: '100%'
  }
};

function CardComponent() {
  return (
    <Card
      title="Card title"
      extra={<a>More</a>}
      style={style.card}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default CardComponent;
