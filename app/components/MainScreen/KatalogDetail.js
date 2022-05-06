import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

import navbarStyles from '../../styles/navbar'
import { BackIcon,ShopGreenIcon,CartWhiteIcon,ShareWhiteIcon,MoreWhiteIcon,BackWhiteIcon,RectangleShapeIcon } from '../../lib/images'
import styles from '../../styles/katalogDetail'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import LinearGradient from 'react-native-linear-gradient';

const widthScreen = Dimensions.get('window').width

export default class KatalogScreen extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return (
      <View>
          <LinearGradient colors={["#000","#000","#FFF"]}  style={{height:48,padding:0,margin:0,zIndex:1000,position:'absolute',top:0,left:0,right:0,opacity:0.5}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
          <TouchableOpacity style={{paddingVertical:15, paddingLeft:16,flex:1}} onPress={() => Actions.pop()}>
            <BackWhiteIcon/>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
          <TouchableOpacity style={{paddingHorizontal:10}}>
            <CartWhiteIcon/>
            </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal:10}}>
            <ShareWhiteIcon/>
            </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal:10}}>
            <MoreWhiteIcon/>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </LinearGradient>
      </View>
    )
  }

  _productSwiper(){
    return(
      <View style={{position:'relative'}}>
        {this.renderHeader()}
         <Swiper activeDot={
           <View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
         } height={360} width={widthScreen} ref={component => this.swiper = component} loop={false} showsPagination={true}>
            <Image style={{width:widthScreen,height:360}}   source={{uri:"https://i.ibb.co/p3mz45Q/p1.jpg"}} />                
            <Image style={{width:widthScreen,height:360}}   source={{uri:"https://i.ibb.co/tZ1FVXJ/p3.jpg"}} />                
            <Image style={{width:widthScreen,height:360}}   source={{uri:"https://i.ibb.co/tYhRLMr/p2.jpg"}} />                
        </Swiper>
      </View>
    )
  }

  



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      {this._productSwiper()}
      <View style={[styles.card,{paddingBottom:16}]}>
        <View style={styles.flexRow}>
          <View style={styles.borderTitle}>
            <Text style={styles.productTitle}>Smart Mom Food Container Stainless Set Purple</Text>
          </View>
          <View style={styles.lovedBorder}>
            <AwesomeIcon name="heart" size={18} color={"#e61e3c"} />
            <Text style={styles.textLoved}>125</Text>
          </View>
        </View>
          {this.props.params.item.id==1?<View style={[styles.rating,{marginLeft:16}]}>
                <View style={styles.ratingGroup}>
                    <AwesomeIcon name="star" size={20} color={"#f5821f"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#f5821f"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#f5821f"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#f5821f"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#f5821f"} style={{marginRight:8}} />
                </View>
                <Text style={styles.ratingText}>8 Ulasan</Text>
          </View>:
          <View style={[styles.rating,{marginLeft:16}]}>
                <View style={styles.ratingGroup}>
                    <AwesomeIcon name="star" size={20} color={"#dcdcdc"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#dcdcdc"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#dcdcdc"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#dcdcdc"} style={{marginRight:8}} />
                    <AwesomeIcon name="star" size={20} color={"#dcdcdc"} style={{marginRight:8}} />
                </View>
                <Text style={styles.ratingText}>0 Ulasan</Text>
          </View>}
          <View style={styles.rows}>
              <Text style={styles.labelText}>Harga Normal</Text>
              <Text style={styles.labelValue}>Rp119.000</Text>
          </View>
          <View style={[styles.rows,{flexDirection:'row'}]}>
              <View style={{width:'50%'}}>
                <Text style={styles.labelText}>Harga member</Text>
                <Text style={styles.labelValue}>Rp119.000</Text>
              </View>
              <View style={{width:'50%'}}>
                <Text style={styles.labelText}>Harga Beli 12+pcs</Text>
                <Text style={styles.labelValue}>Rp104.000</Text>
              </View>
          </View>
        </View>
        <View style={[styles.card,{height:60,flexDirection:'row',alignItems:'center'}]}>
          <View style={[styles.rows]}>
              <Text style={[styles.labelText,{marginBottom:8}]}>Promo Berakhir dalam:</Text>
              <Text style={styles.labelValue}>48 : 23 : 59 : 58</Text>
          </View>
          <View style={{backgroundColor:'transparent',height:'100%',width:210,position:'relative'}}>
            <RectangleShapeIcon/>
            <View style={{position:'absolute',top:0,left:0,height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={[styles.labelValue,{zIndex:100,color:"#FFF",paddingLeft:16}]}>BANNER SALE</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card,{height:60,paddingHorizontal:16,flexDirection:'row',alignItems:'center'}]}>
          <Image style={{width:56,height:30}}  resizeMode={ImageResizeMode.contain} source={require('../../assets/icons/ic_pickup.png')} />         
          <Text style={[styles.labelValue,{marginLeft:8}]}>Cek Ongkir</Text>
        </View>
        <View style={[styles.card,{marginBottom:0,borderBottomColor:'#dcdcdc',borderBottomWidth:1,height:60,paddingHorizontal:16,flexDirection:'row',alignItems:'center'}]}>      
          <Text style={styles.labelValue}>Informasi Produk</Text>
        </View>
        <View style={styles.cardTran}>
            <Text style={styles.labelDesc}>Detail produk</Text>
            <Text style={styles.labelDescChild}>Kode Produk : CON-FG-313A.HMDC1/24SC</Text>
            <Text style={styles.labelDescChild}>Ukuran Produk : 150 x 150 x 200 mm</Text>
            <Text style={styles.labelDescChild}>Berat /pc : 550 g</Text>
            <Text style={[styles.labelDescChild,{marginBottom:0}]}>Smart Mom Food Container Stainless Set Purple adalah kotak makan siang TERBARU dengan design rantang.</Text>
        </View>
      <View style={[styles.card,{paddingBottom:16,borderBottomColor:'#dcdcdc',borderBottomWidth:1,alignItems:'center',marginBottom:0}]}>
            <Text style={styles.labelMore}>Selengkapnya</Text>
      </View>
      <View style={[styles.card,{padding:16}]}>
            <Text style={styles.labelDesc}>Informasi Stok Barang</Text>
            <View style={[styles.tableTop]}>
              <View style={styles.colHeader}>
                <Text style={[styles.labelDesc]}>Gudang</Text>
              </View>
              <View style={[styles.colHeader,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDesc]}>Stock</Text>
              </View>
            </View>
            <View style={[styles.tableBody]}>
              <View style={styles.col}>
                <Text style={[styles.labelDesc]}>Bekasi</Text>
              </View>
              <View style={[styles.col,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDesc]}>1850</Text>
              </View>
            </View>
            <View style={[styles.tableBody]}>
              <View style={styles.col}>
                <Text style={[styles.labelDesc]}>Semarang</Text>
              </View>
              <View style={[styles.col,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDesc]}>1850</Text>
              </View>
            </View>
            <View style={[styles.tableBody]}>
              <View style={styles.col}>
                <Text style={[styles.labelDescDisable]}>Bandung</Text>
              </View>
              <View style={[styles.col,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDescDisable]}>0</Text>
              </View>
            </View>
            <View style={[styles.tableBody]}>
              <View style={styles.col}>
                <Text style={[styles.labelDesc]}>Sidoarjo</Text>
              </View>
              <View style={[styles.col,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDesc]}>600</Text>
              </View>
            </View>
            <View style={[styles.tableBody]}>
              <View style={styles.col}>
                <Text style={[styles.labelDesc]}>Makassar</Text>
              </View>
              <View style={[styles.col,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDesc]}>40</Text>
              </View>
            </View>
            <View style={[styles.tableBottom]}>
              <View style={styles.col}>
                <Text style={[styles.labelDescDisable]}>Medan</Text>
              </View>
              <View style={[styles.col,{borderLeftColor:'rgb(245,130,31)',borderLeftWidth:1,alignItems:'center'}]}>
                <Text style={[styles.labelDescDisable]}>0</Text>
              </View>
            </View>
      </View>


      {this.props.params.item.id==1?
      <View style={[styles.card,{padding:16}]}>
            <Text style={styles.labelValue}>Ulasan Produk</Text>
          <View style={styles.ulasan}>
            <View style={styles.ulasanUser}></View>
            <View style={styles.ulasanDescWrap}>
                  <Text style={styles.userName}>Fandi Gustian</Text>
                  <Text style={styles.userComment}>
                  Barang bagus sekali sesuai dengan gambar pengirimanpun cepat
                  </Text>
            </View>           
          </View>
          <View style={styles.ulasan}>
            <View style={styles.ulasanUser}></View>
            <View style={styles.ulasanDescWrap}>
                  <Text style={styles.userName}>Fandi Gustian</Text>
                  <Text style={styles.userComment}>
                  Barang bagus sekali sesuai dengan gambar pengirimanpun cepat……
                  </Text>
                  <Text style={[styles.userName,{color:"#16b8b2"}]}>lihat selengkapnya</Text>

            </View>       
          </View>
      </View>:
      <View style={[styles.card,{padding:16}]}>
            <Text style={styles.labelValue}>Ulasan Produk</Text>
          <View style={styles.zeroUlasan}>
            <Text style={[styles.labelValue,{fontSize:12}]}>Belum Ada Ulasan</Text>            
          </View>
      </View>}

      <View style={[styles.card,{borderTopWidth:1,borderTopColor:'#DCDCDC',marginBottom:0,padding:16,justifyContent:'space-between',flexDirection:'row'}]}>
            <TouchableOpacity style={[styles.btnTambah,{flexDirection:'row'}]}>
              <Text style={[styles.labelValue,{marginRight:8,color:'#16b8b2',fontWeight: "normal"}]}>Tambahkan</Text>
              <ShopGreenIcon/>                
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOrder}>
              <Text style={[styles.labelValue,{color:"#FFF",fontWeight: "normal"}]}>ORDER</Text>                
            </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    )
  }
}
