import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import navbarStyles from '../../styles/navbar'
import boxContentStyles from '../../styles/boxContent'
import styles from '../../styles/formAddrressBook'

import { BackIcon, EyeIcon, EyeActiveIcon } from '../../lib/images'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

export default class FormAddressBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alamat:'',
      nama:'',
      phone:'',
      kodePos:''

    }
  }

  renderHeader() {
    return (
      <View style={navbarStyles.containerNavbar}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingVertical:15, paddingRight:20}} onPress={() => Actions.pop()}>
            <BackIcon/>
          </TouchableOpacity>
          <Text style={navbarStyles.textNavbar}>Tambah Alamat</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          {this.renderHeader()}
        <ScrollView>
          <View style={styles.form}>
              <Text style={styles.label}>Label Alamat</Text> 
              <View style={styles.boxSelect}>
                <Text style={styles.defaultSelectText}>Pilih Label Alamat</Text>
                <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
              </View>
              <Text style={styles.label}>Nama Penerima</Text> 
              <View style={styles.boxInput}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(nama) => this.setState({nama})} />
              </View>
              <Text style={styles.label}>No. Handphone</Text> 
              <View style={styles.boxInput}>
                  <TextInput
                        style={styles.textInput}
                        onChangeText={(phone) => this.setState({phone})} />
              </View>
              <Text style={styles.label}>Alamat</Text>
              <View style={[styles.boxInput,{height:80}]}>
                  <TextInput
                        numberOfLines={5}
                        multiline={true}
                        style={[styles.textInput,{height:80}]}
                        onChangeText={(alamat) => this.setState({alamat})} />
              </View>
              <Text style={styles.label}>Provinsi</Text>
              <View style={styles.boxSelect}>
                <Text style={styles.defaultSelectText}>Pilih Provinsi</Text>
                <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
              </View>
              <Text style={styles.label}>Kota/Kabupaten</Text>
                <View style={styles.boxSelect}>
                  <Text style={styles.defaultSelectText}>Pilih Kota/Kabupaten</Text>
                  <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
                </View>
              <Text style={styles.label}>Kecamatan</Text>
              <View style={styles.boxSelect}>
                <Text style={styles.defaultSelectText}>Pilih Kecamatan</Text>
                <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
              </View>
              <Text style={styles.label}>Kode Pos</Text>
              <View style={styles.boxInput}>
                  <TextInput
                        style={styles.textInput}
                        onChangeText={(kodePos) => this.setState({kodePos})} />
              </View>
              <TouchableOpacity style={styles.boxMasuk}>
              <Text style={styles.masukText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
