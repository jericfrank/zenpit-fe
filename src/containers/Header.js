import React, { Component } from 'react';
import { Layout, Input } from 'antd';

const { Header } = Layout;

const style = {
  header: {
    background: '#ffffff',
    position: 'fixed',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    zIndex: 1000
  }
};

class HeaderContainer extends Component {
  render() {
    return (
      <Header style={style.header}>
        <Input.Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          size="large"
        />
      </Header>
    );
  }
}

export default HeaderContainer;
