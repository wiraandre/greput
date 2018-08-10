import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';

export default class Napbar extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="loading" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={['Safe mode', <Icon key="1" type="check-circle" />]}
        />
      </div>
    );
  }
}
