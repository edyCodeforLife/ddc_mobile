import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/Onboarding_01'
import Color from '../styles/Color'
import LinearGradient from 'react-native-linear-gradient';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { Actions } from 'react-native-router-flux';

export default class Onboarding_01 extends Component{
  render(){
    return (
        <View style={styles.container}>    
          <LinearGradient colors={[Color.paleGold, Color.pumpkinOrange, Color.pumpkinOrange]} style={styles.linearGradient}>
          <Text style={styles.title}>DROPSHIP MUDAH</Text>
          <Image style={styles.catGray}  resizeMode={ImageResizeMode.contain} source={require('../assets/images/gray_cat.png')} />         
          <Image style={styles.catWhite} resizeMode={ImageResizeMode.contain} source={require('../assets/images/white_cat.png')} />         
          <Image style={styles.ladies} resizeMode={ImageResizeMode.contain}  source={require('../assets/images/ladies.png')} />         
          </LinearGradient>
            <View style={styles.footer}>
                <Text style={styles.caraMudah}>Cara mudah dan murah dengan titip dropship bersama para reseller yang tersebar di seluruh Indonesia. Serta nikmati juga fitur gratis ongkir dengan syarat dan ketentuan yang berlaku.</Text>
            </View>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={styles.btnLewati} onPress={() =>Actions.root1()}>
                <Text style={styles.textLewati}>Lewati</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLanjutkan} onPress={() =>this.props.goNext()}>
                <Text style={styles.textLanjutkan}>Lanjutkan</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }

}
