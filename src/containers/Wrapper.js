import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Card from 'components/Card';

const style = {
  container: {
    background: '#ECECEC',
    padding: '30px',
    minHeight: '100vh'
  },
  card: {
    marginBottom: '5px'
  }
};

const ITEMS = [ 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7 ];

class Wrapper extends Component {
  renderCard = (item, index) => {
    const size = { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 };
    return (
      <Col {...size} key={item + index} style={style.card}>
        <Card />
      </Col>
    );
  };

  render() {
    return (
      <div style={style.container}>
        <Row gutter={8}>
          {_.map(ITEMS, this.renderCard)}
        </Row>
      </div>
    );
  }
}

export default Wrapper;
