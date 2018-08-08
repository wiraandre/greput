import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';

export default class Napbar extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />
          ]}>
          NavBar
        </NavBar>
      </div>
    );
  }
}
