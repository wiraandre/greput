import React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

import Page2 from '../container/Page2';

const tabs = [
  { title: <Badge>Transportasi</Badge> },
  { title: <Badge>Makanan</Badge> },
  { title: <Badge>Kurir</Badge> }
];

const tabs2 = [
  { title: ' Transportasi', sub: '1' },
  { title: 'Makanan', sub: '2' },
  { title: 'Kurir', sub: '3' }
];

const Tabb = () => (
  <div style={{ height: 'auto' }}>
    <Tabs
      swipeable={false}
      tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => {
        console.log('onChange', index, tab);
      }}
      onTabClick={(tab, index) => {
        console.log('onTabClick', index, tab);
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          backgroundColor: '#fff'
        }}>
        Content of first tab
      </div>
      <div>
        <Page2 />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          backgroundColor: '#fff'
        }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />

    <WhiteSpace />
  </div>
);

export default Tabb;
