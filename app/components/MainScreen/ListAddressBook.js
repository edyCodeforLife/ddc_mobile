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
import styles from '../../styles/listAddrressBook'

import { BackIcon } from '../../lib/images'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

export default class ListAddressBook extends Component {
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
          <Text style={navbarStyles.textNavbar}>Buku Alamat</Text>
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
                <Text style={styles.bukuAlamat}>Buku Alamat</Text>
                <TouchableOpacity style={styles.boxTambah} onPress={() => Actions.formAddressBook()}>
                        <Text style={styles.tambahText}>+ Tambah Alamat</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.boxList}>
                <View style={styles.defaultBox}>
                    <Text style={styles.textDefault}>Alamat Utama</Text>
                </View>
                <Text style={styles.type}>Kantor</Text>
                <Text style={styles.nama}>Hendra</Text>
                <Text style={styles.phone}>082110191448</Text>
                <Text style={styles.street}>Jl.Palmerah Utara2, No. 201AA</Text>
                <Text style={styles.city}>Slipi, Jakarta Barat</Text>
                <Text style={styles.kodePos}>DKI Jakarta, 11480</Text>
                <View style={[styles.rowContainer,{justifyContent:'space-between'}]}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.imgEdit}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icEdit.png')} />    
                        <Text style={styles.textEdit}>Ubah</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.imgEdit}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icTrash.png')} />    
                        <Text style={styles.textEdit}>Hapus</Text>
                    </View>
                </View>
          </View>

          <View style={styles.boxList}>
                <Text style={styles.type}>Rumah</Text>
                <Text style={styles.nama}>Hendra</Text>
                <Text style={styles.phone}>082110191448</Text>
                <Text style={styles.street}>Jl.Palmerah Utara2, No. 201AA</Text>
                <Text style={styles.city}>Slipi, Jakarta Barat</Text>
                <Text style={styles.kodePos}>DKI Jakarta, 11480</Text>
                <View style={[styles.rowContainer,{justifyContent:'space-between'}]}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.imgEdit}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icEdit.png')} />    
                        <Text style={styles.textEdit}>Ubah</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.imgEdit}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icTrash.png')} />    
                        <Text style={styles.textEdit}>Hapus</Text>
                    </View>
                </View>
          </View>

          <View style={styles.boxList}>
                <Text style={styles.type}>Rumah</Text>
                <Text style={styles.nama}>Orang</Text>
                <Text style={styles.phone}>082110191448</Text>
                <Text style={styles.street}>Jl.Palmerah Utara2, No. 201AA</Text>
                <Text style={styles.city}>Slipi, Jakarta Barat</Text>
                <Text style={styles.kodePos}>DKI Jakarta, 11480</Text>
                <View style={[styles.rowContainer,{justifyContent:'space-between'}]}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.imgEdit}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icEdit.png')} />    
                        <Text style={styles.textEdit}>Ubah</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.imgEdit}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icTrash.png')} />    
                        <Text style={styles.textEdit}>Hapus</Text>
                    </View>
                </View>
          </View>
        </ScrollView>
        
      </View>
    )
  }
}
