import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class searchCloseIcon extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="20px" height="21px" viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
          <title>Group 25</title>
          <desc>Created with Sketch.</desc>
          <g id="Katalog" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Katalog-Pencarian---Edit-Keyword" transform="translate(-282.000000, -21.000000)">
                    <g id="ic-x" transform="translate(277.000000, 16.000000)">
                        <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                        <path d="M13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 Z" id="Combined-Shape" fill="#F5821F"></path>
                    </g>
                </g>
            </g>
      </svg>`}}
      style={{ width:20, height:20 }} />
    );
  }
}
