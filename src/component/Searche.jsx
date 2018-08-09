import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';

export default class SearchBarr extends React.Component {
  render() {
    return (
      <div>
        <WingBlank>
          <div className="sub-title">mauk makan apa</div>
        </WingBlank>
        <SearchBar placeholder="Search" maxLength={8} cancelText={'batalin'} />
        <WhiteSpace />
      </div>
    );
  }
}
