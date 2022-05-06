import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class RectangleShape extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8,
        <svg width="209px" height="60px" viewBox="0 0 209 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Katalog" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Detail-Produk-+-Sale-Timer" transform="translate(-151.000000, -571.000000)" fill="#F5821F" fill-rule="nonzero">
                <g id="Group-24" transform="translate(0.000000, 571.000000)">
                    <polygon id="Path-19" points="151 60 211 0 360.001681 0 360.001681 60"></polygon>
                </g>
            </g>
        </g>
        </svg>`}}
      style={{ width:'100%', height:'100%' }} />
    );
  }
}
