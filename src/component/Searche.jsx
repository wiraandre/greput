import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';

export default class SearchBarr extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          placeholder="mauk makan apa"
          maxLength={8}
          cancelText={'batalin'}
        />
        <WhiteSpace />
      </div>
    );
  }
}
