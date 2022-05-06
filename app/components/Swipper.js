import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import styles from '../styles/Swipper'
import Swiper from 'react-native-swiper';



import Onboarding_01 from './Onboarding_01'
import Onboarding_02 from './Onboarding_02'

export default class Swipper extends Component{
  constructor(props) {
    super(props)
  }
  _back(){
    this.swiper.scrollBy(-1);
  }
  _next(){
    this.swiper.scrollBy(1);
  }

  render(){
    return (
      <Swiper ref={component => this.swiper = component} loop={false} showsPagination={false}>
        <View style={styles.container}>
          <Onboarding_01 goNext={this._next.bind(this)}/>
        </View>
        <View style={styles.container}>
          <Onboarding_02 goBack={this._back.bind(this)}/>
        </View>
      </Swiper>
    );
  }
}
