import React, { Component } from 'react';
import Carosel from '../component/Carosel';
import Searche from '../component/Searche';
import ListVieww from '../component/ListView';

class Page2 extends Component {
  render() {
    return (
      <div>
        <Searche />
        <Carosel />
        <ListVieww />
      </div>
    );
  }
}

export default Page2;
