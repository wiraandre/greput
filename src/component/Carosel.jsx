import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Carosel extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'AiyWuByWklrrUDlFignR',
          'TekJlZRVCjLFexlOCuWn',
          'IJOtIlfsYdTyaDTRVrLI'
        ]
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log('slide to', index)}>
          {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight
              }}>
              <img
                src={`https://cdn.grab.com/id/wp-content/uploads/sites/9/2016/08/hero_banner_grabfood.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
