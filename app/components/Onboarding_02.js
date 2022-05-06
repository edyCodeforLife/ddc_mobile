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
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
export default class Onboarding_02 extends Component{
  render(){
    return (
        <View style={styles.container}>    
          <LinearGradient colors={[Color.tealishTwo, Color.tealishTwo, Color.tealish]} style={styles.linearGradient}>
          <Text style={styles.title}>POINT REWARD</Text>
          <Image style={styles.catGray}  resizeMode={ImageResizeMode.contain} source={require('../assets/images/gray_cat02.png')} />         
          <Image style={styles.catWhite} resizeMode={ImageResizeMode.contain} source={require('../assets/images/white_cat02.png')} />         
          <Image style={styles.ladies} resizeMode={ImageResizeMode.contain}  source={require('../assets/images/ladies02.png')} />         
          </LinearGradient>
            <View style={styles.footer}>
                <Text style={styles.caraMudah}>Setiap pembelanjaan senilai Rp 10.000, Anda akan mendapatkan 1 poin (berlaku kelipatan). Poin ini bisa Anda tukarkan dengan berbagai reward menarik pastinya.</Text>
            </View>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={styles.btnLewati} onPress={() =>this.props.goBack()}>
                <Text style={styles.textLewati}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLanjutkan} onPress={() =>Actions.root1()}>
                <Text style={styles.textLanjutkan}>Lanjutkan</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }

}
