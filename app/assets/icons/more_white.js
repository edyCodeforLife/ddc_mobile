import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class MoreWhite extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8,
        <svg width="4px" height="18px" viewBox="0 0 4 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Katalog" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Detail-Produk-+-Sale-Timer" transform="translate(-331.000000, -18.000000)" fill-rule="nonzero">
                <g id="Header-produk-detail-Copy-2">
                    <g id="Group-17-Copy">
                        <g id="ic-more" transform="translate(321.000000, 15.000000)">
                            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                            <g id="Group" transform="translate(10.000000, 3.000000)" fill="#FFFFFF">
                                <g id="Group-3">
                                    <circle id="Oval" cx="1.66666667" cy="1.66666667" r="1.66666667"></circle>
                                    <circle id="Oval-Copy" cx="1.66666667" cy="9" r="1.66666667"></circle>
                                    <circle id="Oval-Copy-2" cx="1.66666667" cy="16.3333333" r="1.66666667"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
        </svg>`}}
      style={{ width:20, height:20 }} />
    );
  }
}
