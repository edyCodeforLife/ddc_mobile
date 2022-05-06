import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import navbarStyles from '../../styles/navbar'
import boxContentStyles from '../../styles/boxContent'
import styles from '../../styles/katalogPencarian'
import { BackIcon,SearchCloseBtn } from '../../lib/images'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import KatalogComponent from './KatalogComponent';
export default class KatalogPencarian extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      loading:false
    }
    this.unsub =null;
  }
  _removeKeyword(){
    this.setState({keyword:''});
  }
  _addKeyword(text){
    this.setState({keyword:text,loading:true});
   this.unsub =setTimeout(() => {
      this.setState({loading:false});
    }, 2000);
  }
  componentWillUnmount(){
    clearTimeout(this.unsub);
  }
  renderHeader() {
    return (
      <View style={navbarStyles.containerNavbar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingVertical:15, paddingRight:20}} onPress={() => Actions.pop()}>
            <BackIcon/>
          </TouchableOpacity>
          <TextInput
                placeholder={"Cari produk"}
                style={[navbarStyles.textNavbar,{flex:1}]}
                value={this.state.keyword}
                onChangeText={(text) => this._addKeyword(text)} />
          {this.state.keyword?
          <TouchableOpacity style={{width:20,marginTop:6,marginHorizontal:10}} onPress={()=>this._removeKeyword()}>
              <SearchCloseBtn/>          
          </TouchableOpacity>:null}
          <TouchableOpacity style={{width:20,marginHorizontal:10}}>
              <Image style={styles.imgSpeaker}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/speaker.png')} />                
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    let {keyword,loading} = this.state;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {!keyword && !loading?<View style={styles.boxSuggestion}>
            <View style={styles.historyFlex}>
              <Text style={[styles.populerText,{marginBottom:0}]}>Pencarian Terakhir</Text>            
              <Text style={styles.hapusText}>Hapus</Text>            
            </View>
            <View style={styles.historyFlex}>
              <Text style={styles.produkText}>Medina</Text>      
              <Image style={styles.imgReturn}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/ic_return.png')} />                
            </View>
            <View style={styles.historyFlex}>
              <Text style={styles.produkText}>Lunch Box</Text>      
              <Image style={styles.imgReturn}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/ic_return.png')} />                
            </View>
            <View style={styles.historyFlex}>
              <Text style={styles.produkText}>Set of 3</Text>      
              <Image style={styles.imgReturn}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/ic_return.png')} />                
            </View>
            <View style={styles.historyFlex}>
              <Text style={styles.produkText}>dusdusan</Text>      
              <Image style={styles.imgReturn}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/ic_return.png')} />                
            </View>

            <Text style={styles.populerText}>Produk Populer</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.kategoriContainer}>
              <View style={styles.boxSuggestProduct}></View>
              <View style={styles.boxSuggestProduct}></View>
              <View style={styles.boxSuggestProduct}></View>
              <View style={styles.boxSuggestProduct}></View>
              <View style={styles.boxSuggestProduct}></View>
              <View style={styles.boxSuggestProduct}></View>
              <View style={styles.boxSuggestProduct}></View>
          </ScrollView>
    </View>:null}
    {keyword && !loading?<KatalogComponent/>:null}
    {loading?<View style={[{marginTop:16,justifyContent:'center'}]}><ActivityIndicator size="large" color="#f5821f" /></View>:null}
     </View>
    )
  }
}

