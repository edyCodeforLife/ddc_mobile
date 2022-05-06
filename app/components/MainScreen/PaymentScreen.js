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
import styles from '../../styles/PaymentScreen'

import { BackIcon } from '../../lib/images'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
export default class PaymentScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bank:false,
      cc:false,
      va:false,
      retail:false
    }
  }

  _toggle(pm){
    var val = {
      bank:false,
      cc:false,
      va:false,
      retail:false
    }
    this.setState({...val});
    this.setState(pm);
  }

  renderHeader() {
    return (
      <View style={navbarStyles.containerNavbar}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingVertical:15, paddingRight:20}} onPress={() => Actions.pop()}>
            <BackIcon/>
          </TouchableOpacity>
          <Text style={navbarStyles.textNavbar}>Pembayaran</Text>
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
                <Text style={styles.bukuAlamat}>Pilih Metode Pembayaran</Text>
          </View>
          <TouchableOpacity onPress={()=>{this._toggle({bank:true})}}>
            <View style={[styles.radioContainer,this.state.bank?{backgroundColor:"#F0F0F0"}:null]}>
                <View style={[styles.radioBullet,this.state.bank?{borderColor:"#28b0a7"}:null]}>
                  {this.state.bank?<View style={styles.radioBulletFill}></View>:null}
                </View>
                <Text style={styles.radioText}>Bank Transfer</Text>
            </View>
          </TouchableOpacity>
            {this.state.bank?
            <View style={styles.bankMethod}>
              <View style={styles.bankIcons}>
                  <Image style={styles.bankBca}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/bca.png')} />    
                  <Image style={styles.bankMandiri}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/mandiri.png')} />    
                  <Image style={styles.bankBri}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/bri.png')} />    
              </View>
              <Text style={styles.label}>Pilih Bank</Text>
              <View style={[styles.boxSelect,{width:'100%'}]}>
                <Text style={styles.defaultSelectText}>BCA</Text>
                <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
              </View>
              <Text style={styles.labelBold}>Ketentuan:</Text>
              <View style={styles.syaratBox}>
                  <View style={styles.liBullet}></View>
                  <View style={styles.syaratCol}>
                      <Text style={styles.syaratText}>Metode pembayaran ini dapat dilakukan</Text>
                      <Text style={styles.syaratText}>melalui ATM BCA, M-BCA atau KlikBCA.</Text>
                  </View>
              </View>

            </View>:null}

          <TouchableOpacity onPress={()=>{this._toggle({va:true})}}>
            <View style={[styles.radioContainer,this.state.va?{backgroundColor:"#F0F0F0"}:null]}>
                <View style={[styles.radioBullet,this.state.va?{borderColor:"#28b0a7"}:null]}>
                  {this.state.va?<View style={styles.radioBulletFill}></View>:null}
                </View>
                <Text style={styles.radioText}>Internet Banking (virtual account)</Text>
            </View>
          </TouchableOpacity>
          {this.state.va?
            <View style={styles.bankMethod}>
              <View style={styles.bankIcons}>
                  <Image style={styles.bankBca}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/bca.png')} />    
                  <Image style={styles.bankMandiri}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/mandiri.png')} />    
                  <Image style={styles.bankBri}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/permata.png')} />    
              </View>
              <Text style={styles.label}>Pilih Bank</Text>
              <View style={[styles.boxSelect,{width:'100%'}]}>
                <Text style={styles.defaultSelectText}>Internet Banking BCA</Text>
                <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
              </View>
              <Text style={styles.labelBold}>Ketentuan:</Text>
              <View style={styles.syaratBox}>
                  <View style={styles.liBullet}></View>
                  <View style={styles.syaratCol}>
                      <Text style={styles.syaratText}>Satu nomor virtual account hanya berlaku</Text>
                      <Text style={styles.syaratText}>untuk satu akun (tidak berubah-ubah).</Text>
                  </View>
              </View>
              <View style={styles.syaratBox}>
                  <View style={styles.liBullet}></View>
                  <View style={styles.syaratCol}>
                      <Text style={styles.syaratText}>Pembayaran dengan virtual account hanya</Text>
                      <Text style={styles.syaratText}>berlaku untuk satu tagihan terbaru.</Text>
                  </View>
              </View>

            </View>:null}

          <TouchableOpacity onPress={()=>{this._toggle({cc:true})}}>
            <View style={[styles.radioContainer,this.state.cc?{backgroundColor:"#F0F0F0"}:null]}>
                <View style={[styles.radioBullet,this.state.cc?{borderColor:"#28b0a7"}:null]}>
                  {this.state.cc?<View style={styles.radioBulletFill}></View>:null}
                </View>
                <Text style={styles.radioText}>Kartu Kredit</Text>
            </View>
          </TouchableOpacity>

          {this.state.cc?
            <View style={styles.bankMethod}>
              <View style={styles.bankIcons}>
                  <Image style={styles.bankBca}  resizeMode={ImageResizeMode.contain} source={require('../../assets/images/mastercard.png')} />
              </View>
              <Text style={styles.label}>Nama Pemilik Kartu</Text>
              <View style={[styles.boxInput]}>
                    <TextInput
                          style={styles.textInput}
                          onChangeText={(tahun) => console.log(tahun)} />
              </View>
              <Text style={styles.label}>Nomor Kartu</Text>
              <View style={[styles.boxInput]}>
                    <TextInput
                          style={styles.textInput}
                          onChangeText={(tahun) => console.log(tahun)} />
              </View>
              <Text style={styles.label}>Masa Berlaku Kartu</Text>
              <View style={styles.colDDC}>
                <View style={styles.boxSelect}>
                  <Text style={styles.defaultSelectText}>Bulan</Text>
                  <Image style={styles.dropDown}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/icDown.png')} />         
                </View>
                <View style={[styles.boxInput,styles.half]}>
                    <TextInput
                          placeholder={"Tahun"}
                          style={styles.textInput}
                          onChangeText={(tahun) => console.log(tahun)} />
                </View>
              </View>
              <Text style={styles.label}>Kode Keamanan Kartu</Text>
              <View style={styles.colDDC}>
                <View style={[styles.boxInput,styles.half]}>
                    <TextInput
                          placeholder={"CVV"}
                          style={styles.textInput}
                          onChangeText={(tahun) => console.log(tahun)} />
                </View>
                <View style={[styles.half,{alignItems:'flex-start',justifyContent:'center'}]}>
                  <Text style={[styles.tncText,{width:90,borderBottomColor:'#2abab1',borderBottomWidth:1,fontFamily: 'GothamRounded-Bold',marginHorizontal:8,color:'#2abab1'}]}>
                    Apa itu CVV?
                  </Text>
                </View>
              </View>
              <Text style={styles.labelBold}>Ketentuan:</Text>
              <View style={styles.syaratBox}>
                  <View style={styles.liBullet}></View>
                  <View style={styles.syaratCol}>
                      <Text style={styles.syaratText}>Selesaikan pembayaran dalam waktu 1 jam</Text>
                      <Text style={styles.syaratText}>untuk menghindari pembatalan transaksi</Text>
                      <Text style={styles.syaratText}>secara otomatis.</Text>
                  </View>
              </View>
            </View>:null}

          <TouchableOpacity onPress={()=>{this._toggle({retail:true})}}>
            <View style={[styles.radioContainer,{paddingBottom:24},this.state.retail?{backgroundColor:"#F0F0F0"}:null]}>
                <View style={[styles.radioBullet,this.state.retail?{borderColor:"#28b0a7"}:null]}>
                  {this.state.retail?<View style={styles.radioBulletFill}></View>:null}
                </View>
                <Text style={styles.radioText}>Bayar di Gerai (retail)</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.tncContainer}>
            <Text style={styles.tncText}>
            Dengan menekan “Bayar Sekarang”, Saya telah setuju
            </Text>
            <View style={{justifyContent:'center',flexDirection:'row'}}>
                <Text style={styles.tncText}>
                dengan
                </Text>
                <Text style={[styles.tncText,{borderBottomColor:'#2abab1',borderBottomWidth:1,fontFamily: 'GothamRounded-Bold',marginHorizontal:8,color:'#2abab1'}]}>
                syarat dan ketentuan
                </Text>
                <Text style={styles.tncText}>
                di dusdusan.com
                </Text>
            </View>
          </View>
          <View style={styles.boxForm}>
            <TouchableOpacity style={styles.boxMasuk}>
                <Text style={styles.masukText}>Bayar Sekarang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
      </View>
    )
  }
}
