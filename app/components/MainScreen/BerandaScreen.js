/*
 * This example demonstrates how to use ParallaxScrollView within a ScrollView component.
 */
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from '../../styles/MainScreen/beranda'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

import LinearGradient from 'react-native-linear-gradient';
import Color from '../../styles/Color'
import navbarStyles from '../../styles/navbar'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

class BerandaScreen extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'One'
      ])
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={stylesMe.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <View key={rowData}>

        <StatusBar backgroundColor={Color.peach} barStyle="light-content" />
                  <View style={styles.trending}>
                  <View style={styles.containerTitle}>
                      <Text style={styles.leftTitle}>Trending Produk</Text>
                      <Text style={styles.rightTitle}>Lihat semua >></Text>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowCard}>
                      <TouchableOpacity style={styles.partTrendingCard}>
                          <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/p3mz45Q/p1.jpg'}} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.partTrendingCard}>
                          <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/tZ1FVXJ/p3.jpg'}} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.partTrendingCard}>
                          <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/tYhRLMr/p2.jpg'}} />
                      </TouchableOpacity>
                  </ScrollView>
              </View>
              <View style={styles.unggulan}>
                  <View style={styles.containerTitle}>
                      <Text style={styles.leftTitle}>Produk Unggulan</Text>
                      <Text style={styles.rightTitle}>Lihat semua >></Text>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.rowCard]}>
                      <TouchableOpacity style={styles.partUnggulanCard}>
                          <View>
                            <Image style={{width:'100%',height:145}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/p3mz45Q/p1.jpg'}} />
                            <Text  styles={styles.productName}>Rainbow Lunch Set</Text>
                          </View>
                          <View>
                              <View style={styles.ratingGroup}>
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                            </View>
                          <Text  styles={styles.productPrice}>Rp 159,000/pc</Text>

                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.partUnggulanCard}>
                          <View>
                            <Image style={{width:'100%',height:145}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/p3mz45Q/p1.jpg'}} />
                            <Text  styles={styles.productName}>Rainbow Lunch Set</Text>
                          </View>
                          <View>
                              <View style={styles.ratingGroup}>
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                            </View>
                          <Text  styles={styles.productPrice}>Rp 159,000/pc</Text>

                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.partUnggulanCard}>
                          <View>
                            <Image style={{width:'100%',height:145}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/p3mz45Q/p1.jpg'}} />
                            <Text  styles={styles.productName}>Rainbow Lunch Set</Text>
                          </View>
                          <View>
                              <View style={styles.ratingGroup}>
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                                <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                            </View>
                          <Text  styles={styles.productPrice}>Rp 159,000/pc</Text>

                        </View>
                      </TouchableOpacity>
                  </ScrollView>
              </View>
            </View>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            backgroundColor={'transparent'}
            contentBackgroundColor="#f2f2f2"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}
            fadeOutForeground={true}
            renderBackground={() => (
                  <LinearGradient key="background" colors={[Color.peach, Color.peach, Color.white0]} style={styles.jumboTron}></LinearGradient>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={[styles.jumboTron ,{backgroundColor:'transparent'}]}>
                <View style={styles.containerSearch}>
                    <View style={styles.containerIMG}>
                        <Image style={styles.iconBarcode}  source={require('../../assets/icons/barcode.png')} />
                    </View>
                    <View style={styles.containerTextSearch}>
                      <Text style={styles.textSearch}>Cari Produk</Text>
                      <Image style={styles.iconSearch}  source={require('../../assets/icons/search.png')} />
                    </View>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={[{marginTop:16}]}>
                        <TouchableOpacity style={styles.partJumboTronCard}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/rFpLkKg/group-3x.png'}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.partJumboTronCard}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/rFpLkKg/group-3x.png'}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.partJumboTronCard}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/rFpLkKg/group-3x.png'}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.partJumboTronCard}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode={ImageResizeMode.contain} source={{uri:'https://i.ibb.co/rFpLkKg/group-3x.png'}} />
                        </TouchableOpacity>
                  </ScrollView>
              </View>
              
            )}

            
            renderStickyHeader={() => (
              <View key="sticky-header" style={[navbarStyles.containerNavbar]}>
                  <View style={[styles.containerSearch,{backgroundColor:'#f6f6f6'}]}>
                      <View style={styles.containerIMG}>
                          <Image style={styles.iconBarcode}  source={require('../../assets/icons/barcode.png')} />
                      </View>
                      <View style={styles.containerTextSearch}>
                        <Text style={styles.textSearch}>Cari Produk</Text>
                        <Image style={styles.iconSearch}  source={require('../../assets/icons/search.png')} />
                      </View>
                    </View>
                </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={[navbarStyles.containerNavbar]}>
                  <View style={[styles.containerSearch,{backgroundColor:'#f6f6f6'}]}>
                      <View style={styles.containerIMG}>
                          <Image style={styles.iconBarcode}  source={require('../../assets/icons/barcode.png')} />
                      </View>
                      <View style={styles.containerTextSearch}>
                        <Text style={styles.textSearch}>Cari Produk</Text>
                        <Image style={styles.iconSearch}  source={require('../../assets/icons/search.png')} />
                      </View>
                    </View>
                </View>
            )}            
            />
        )}
      />
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 331;
const STICKY_HEADER_HEIGHT = 70;


const stylesMe = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

export default BerandaScreen;