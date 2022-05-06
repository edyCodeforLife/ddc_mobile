import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import styles from '../styles/SplashScreen'
import LinearGradient from 'react-native-linear-gradient';
import Color from '../styles/Color'
import { Actions } from 'react-native-router-flux';

export default class SplashScreen extends Component{
  render(){
    return (
      <LinearGradient colors={[Color.paleGold, Color.pumpkinOrange, Color.pumpkinOrange]} style={styles.linearGradient}>
        <View style={styles.container}>
          <Image style={styles.icon}  source={require('../assets/images/splash_icon.png')} />
        </View>
        </LinearGradient>
    );
  }

  componentWillMount(){
    // StatusBar.setHidden(true);
  }
  componentDidMount(){
    setTimeout(() => {
      Actions.swipper()
    }, 3000);
  }
}
