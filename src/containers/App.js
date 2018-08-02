import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Wrapper from './Wrapper';

const { Content } = Layout;

const style = {
  content: {
    marginTop: '55px'
  }
};

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content style={style.content}>
          <Wrapper />
        </Content>
      </Layout>
    );
  }
}

export default App;
