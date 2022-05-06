import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView } from 'react-navigation';
import Modal from 'react-native-modal'

import { PengaturanIcon, SearchIcon, FilterIcon, BackIcon, ChecklistIcon } from '../../lib/images'
import styles from '../../styles/MainScreen/profil'
import boxContentStyles from '../../styles/boxContent'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

const widthScreen = Dimensions.get('window').width

const filterList = [
  {id: 1, name: 'Terbaru'},
  {id: 2, name: 'Terlaris'},
  {id: 3, name: 'Terpopuler'},
  {id: 4, name: 'Harga Tertinggi'},
  {id: 5, name: 'Harga Terendah'}
]

const kategoriList = [
  {id: 1, name: 'Perlengkapan Jualan'},
  {id: 2, name: 'Rumah Tangga'},
  {id: 3, name: 'Fashion Anak'},
  {id: 4, name: 'Perlengkapan Bayi'},
  {id: 5, name: 'Fashion Wanita'},
  {id: 6, name: 'Food'},
  {id: 7, name: 'Dekorasi Rumah'},
  {id: 8, name: 'Dusdusan'},
  {id: 9, name: 'Fashion Wanita'},
  {id: 10, name: 'Medina'},
  {id: 11, name: 'Promo Kurma Water'},
  {id: 12, name: 'Supra'},
  {id: 13, name: 'Persiapan Jualan'},
]

export default class KatalogScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      merkSelected:null,
      gridType: true,
      modalVisible: false,
      modalFilterVisible: false,
      modalFilterNextVisible: false,
      filterSelected: {id: 1, name: 'Terbaru'},
      kategoriSelected: [],
      produkTerbaru: false,
      yPos:0,
      katalog: [
        {id: 1, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/p3mz45Q/p1.jpg'},
        {id: 2, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/tZ1FVXJ/p3.jpg'},
        {id: 3, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/tYhRLMr/p2.jpg'},
        {id: 4, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/qCqjTHK/p4.jpg'},
        {id: 5, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/ZBJS9Q2/p5.jpg'},
        {id: 6, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/p3mz45Q/p1.jpg'},
        {id: 7, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/tZ1FVXJ/p3.jpg'},
        {id: 8, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/tYhRLMr/p2.jpg'},
        {id: 9, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/qCqjTHK/p4.jpg'},
        {id: 10, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/ZBJS9Q2/p5.jpg'},
        {id: 11, name: 'Azalea Large Snack Container (set of 3)',price:'Rp 180,000',img:'https://i.ibb.co/tYhRLMr/p2.jpg'},

      ],
    }
    this.renderRow = this.renderRow.bind(this)
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>Katalog</Text>
        <TouchableOpacity style={{paddingLeft:20, marginBottom:10}} onPress={() => Actions.katalogpencarian()}>
          <SearchIcon/>
        </TouchableOpacity>
      </View>
    )
  }

  renderBarOptions() {
    let {merkSelected} = this.state;
    let kategoriBar = (
      <View style={{backgroundColor: '#FFFFFF', height: 45, marginBottom: 20,
      marginTop: 5, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={stylesCard.kategoriContainer}>
          <TouchableOpacity style={merkSelected=='medina'?stylesCard.kategoriSelected:stylesCard.kategori} onPress={()=>this.setState({merkSelected:'medina'})}>
            <Text style={merkSelected=='medina'?stylesCard.selectedText:stylesCard.text}>Medina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={merkSelected=='dusdusan'?stylesCard.kategoriSelected:stylesCard.kategori} onPress={()=>this.setState({merkSelected:'dusdusan'})}>
            <Text style={merkSelected=='dusdusan'?stylesCard.selectedText:stylesCard.text}>Dusdusan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={merkSelected=='technoplast'?stylesCard.kategoriSelected:stylesCard.kategori} onPress={()=>this.setState({merkSelected:'technoplast'})}>
            <Text style={merkSelected=='technoplast'?stylesCard.selectedText:stylesCard.text}>Technoplast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={merkSelected=='tm'?stylesCard.kategoriSelected:stylesCard.kategori} onPress={()=>this.setState({merkSelected:'tm'})}>
            <Text style={merkSelected=='tm'?stylesCard.selectedText:stylesCard.text}>Tempat Makan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )

    let filterBar = (
      <View style={{backgroundColor: '#FFFFFF', borderWidth: 0.5, borderColor: 'rgb(220,220,220)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, height: 40}}>
        <TouchableOpacity onPress={() => this.setState({gridType: !this.state.gridType})}>
          <Icon style={{fontSize:18}} name={this.state.gridType ? 'grid' : 'list'}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{marginRight: 10, flexDirection:'row'}} onPress={() => this.setState({modalVisible: true})}>
            <Text style={[stylesCard.text,{color:'#f5821f'}]}>{this.state.filterSelected.name}</Text>
            <Icon style={{fontSize:10, marginLeft:5,marginTop:3 }} color={'#f5821f'} name='arrow-down'/>
          </TouchableOpacity>
          <Text style={stylesCard.text}>Urutkan</Text>
          <View style={{height: 16, borderLeftWidth:1, borderColor:'rgb(220,220,220)', marginHorizontal: 10}}/>
          <TouchableOpacity onPress={() => this.setState({modalFilterVisible: true, modalFilterNextVisible: false})} style={{flexDirection: 'row', alignItems: 'center'}}>
            <FilterIcon/>
            <Text style={[stylesCard.text, {marginLeft: 5}]}>FILTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

    return (
      <View>
        {filterBar}
        {kategoriBar}
      </View>
    )
  }

  renderRow(katalog) {
    // if (katalog.item.empty === true) {
    //    return <View/>;
    //  }
    if (this.state.gridType) {
       return (
         <TouchableOpacity
            onPress={() => Actions.katalogdetail({params:katalog})}
            style={{width:widthScreen/2-20, backgroundColor: '#FFF', height: 253, marginRight: katalog.index % 2 == 0 ?  10 : 0, marginBottom: 15 }}
         >
           <Image style={{width:widthScreen/2-20,height:145}}   source={{uri:katalog.item.img}} />                
           <Text style={styles.produkText}>{katalog.item.name}</Text>
           <Text style={[styles.produkText]}>{katalog.item.price}</Text>
           <View style={styles.ratingFlex}>
           <View style={styles.rating}>
                <View style={styles.ratingGroup}>
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                </View>
                <Text style={styles.ratingText}>(4)</Text>
            </View>
            <View style={styles.oval}>
                <AwesomeIcon name="heart" size={18} color={"#e61e3c"} />
            </View>
           </View>
         </TouchableOpacity>
       );
    } else {
      return (
         <TouchableOpacity
            onPress={() => Actions.katalogdetail()}
            style={{ flex:1,justifyContent:'space-between',alignItems:'flex-end',flexDirection:'row', backgroundColor: 'transparent', height: 100, borderBottomWidth:1,borderBottomColor:"rgb(220,220,220)",marginBottom: 10 }}
         >
           <Image style={{width:90,height:90,marginBottom:8}}   source={{uri:katalog.item.img}} />                          
          <View style={{height:100,width:widthScreen-165}}>
            <Text style={styles.produkText}>{katalog.item.name}</Text>
            <Text style={styles.produkText}>{katalog.item.price}</Text>
            <View style={[styles.rating,{marginLeft:8,marginTop:8}]}>
                <View style={styles.ratingGroup}>
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                    <AwesomeIcon name="star" size={12} color={"#f5821f"} />
                </View>
                <Text style={styles.ratingText}>(4)</Text>
            </View>
          </View>
            <View style={[styles.oval,{marginBottom:8,marginRight:8}]}>
                <AwesomeIcon name="heart" size={18} color={"#e61e3c"} />
            </View>
         </TouchableOpacity>
      )
    }
  }

  keyExtractor(data) {
    if (data) {
      return data.id
    }
  }

  hideFilterModal() {
    this.setState({ modalFilterVisible: false })
  }

  filterModal() {
    let filters = filterList.map((filter) => {
        return (
          <TouchableOpacity key={filter.name} onPress={() => this.setState({filterSelected: filter, modalVisible: false})}>
            <Text style={[this.state.filterSelected.name==filter.name?{marginBottom: 10,color:'#f5821f'}:{marginBottom: 10}]}>{filter.name}</Text>
          </TouchableOpacity>
        )
    })

    return (
      <Modal
        supportedOrientations={['portrait']}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropColor	={'transparent'}
        isVisible={this.state.modalVisible}
        onBackdropPress={() => this.setState({modalVisible: false})}
        style={stylesModalFilter.menuModal}
      >
          <View style={stylesCard.cardContainer}>
            <View style={stylesCard.card}>
              {filters}
            </View>
        </View>
      </Modal>
    )
  }

  onTop(){
    return(
      <View style={styles.onTop}>
        <TouchableOpacity style={styles.boxOntop} onPress={()=>this.scroller.scrollTo({x: 0, y: 0, animated: true})}>
            
              <Text style={styles.topText}>Kembali ke Atas</Text>
              <AwesomeIcon name="arrow-up" size={16} color={"#282828"} />
            
        </TouchableOpacity>
      </View>
    )
  }

  backPress() {
    this.setState({ modalFilterNextVisible: false })
  }

  selectKategori(kategori) {
    let kategoriList = this.state.kategoriSelected
    kategoriList.push(kategori)
    this.setState({ kategoriSelected: kategoriList })
  }

  handleScroll(event){
    console.log(event.nativeEvent.contentOffset.y);
    this.setState({
      yPos : event.nativeEvent.contentOffset.y,
    })
  }

  active_radio(){
    return(
            <View style={{alignItems: 'center', justifyContent: 'center', width: 16, height: 16, borderRadius: 8, borderWidth: 1, borderColor: '#16B8B2'}}>
              <View style={{width: 8, height: 8, borderRadius: 4,backgroundColor:'#16B8B2'}}></View>
            </View>
    )
  }
  disable_radio(){
    return(
            <View style={{alignItems: 'center', justifyContent: 'center', width: 16, height: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgb(220,220,220)'}}>
              <View style={{width: 8, height: 8, borderRadius: 4,backgroundColor:'#FFF'}}></View>
            </View>
    )
  }

  render() {
    let { katalog, gridType, modalFilterVisible, modalFilterNextVisible, produkTerbaru, kategoriSelected } = this.state
    let data = []
    // console.log('kategoriSelected: ', kategoriSelected);
    let kategoris = kategoriList.map((kategori) => {
        let selected = null
        kategoriSelected.find((o) => {
          selected = o == kategori.id
        })
        // console.log('\nkategori: ', kategori.id);
        // console.log('\nkategori: ', kategori.name);
        // console.log('selected: ', selected);
        return (
          <TouchableOpacity key={kategori.id} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 23, paddingHorizontal: 15}} onPress={this.selectKategori.bind(this, kategori.id)}>
            <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>{kategori.name}</Text>
            {selected?this.active_radio():this.disable_radio()}
          </TouchableOpacity>
        )
    })

    let content = null
    content = (
        <FlatList
          key = {gridType ? 'grid' : 'list'}
          data = {data.concat(this.state.katalog)}
          style={{paddingHorizontal: 15}}
          numColumns= {gridType ? 2 : 1}
          keyExtractor = {this.keyExtractor}
          renderItem = {this.renderRow} />
    )

    return (
      <View style={{position:'relative'}}>
      <ScrollView 
      ref={(scroller) => {this.scroller = scroller}}
       onScroll={this.handleScroll.bind(this)} scrollEventThrottle={16}>
      <View style={[styles.container]}>
          {this.renderHeader()}
          {this.renderBarOptions()}
          {content}
            <Modal
              supportedOrientations={['portrait']}
              animationIn='slideInRight'
              animationOut='slideOutRight'
              isVisible={modalFilterVisible}
              onBackdropPress={this.hideFilterModal.bind(this)}
              style={stylesModalFilter.menuModal}
            >
              <View style={stylesModalFilter.menuModalContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                <TouchableOpacity>
                  <Text>RESET</Text>
                </TouchableOpacity>
                <Text style={{color: 'rgb(40,40,40)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>Filter</Text>
                <TouchableOpacity onPress={this.hideFilterModal.bind(this)}>
                  <Text style={{color: 'rgb(245,130,31)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>selesai</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 10, paddingHorizontal: 15}} onPress={() => this.setState({ modalFilterNextVisible: true})}>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Kategori</Text>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Semua</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 10, paddingHorizontal: 15}} onPress={() => this.setState({ modalFilterNextVisible: true})}>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Harga</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{borderColor:'rgb(40,40,40)', borderBottomWidth:1, width: 70, alignItems: 'center'}}>
                    <TextInput
                      style={{fontFamily:"GothamRounded-Book",fontSize:10,width:'100%',textAlign:"left"}}
                      placeholder='Terendah'
                    />
                  </View>
                  <Text style={{marginHorizontal: 15,paddingTop:8}}>-</Text>
                  <View style={{borderColor:'rgb(40,40,40)', borderBottomWidth:1, width: 70, alignItems: 'center'}}>
                    <TextInput
                      style={{fontFamily:"GothamRounded-Book",fontSize:10,width:'100%',textAlign:"left"}}
                      placeholder='Tertinggi'/>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 10, paddingHorizontal: 15}} onPress={() => this.setState({ modalFilterNextVisible: true})}>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Produk Terbaru</Text>
                <View>
                  <Switch
                    onValueChange={ () => this.setState({ produkTerbaru: !produkTerbaru })}
                    value={produkTerbaru} />
                </View>
              </View>
              <Modal
                supportedOrientations={['portrait']}
                animationIn='slideInUp'
                animationOut='slideOutDown'
                backdropColor	={'transparent'}
                isVisible={modalFilterNextVisible}
                onBackdropPress={this.hideFilterModal.bind(this)}
                style={stylesModalFilter.menuModal}
              >
                <View style={stylesModalFilter.menuModalContainerNext}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                    <TouchableOpacity onPress={this.backPress.bind(this)}>
                      <BackIcon/>
                    </TouchableOpacity>
                    <Text style={{color: 'rgb(40,40,40)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>Kategori</Text>
                    <TouchableOpacity onPress={this.hideFilterModal.bind(this)}>
                      <Text style={{color: 'rgb(245,130,31)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>selesai</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView>
                    {kategoris}
                  </ScrollView>

                </View>
              </Modal>
              </View>
            </Modal>
            {this.filterModal()}
            </View>
          </ScrollView>
            {this.state.yPos>135?this.onTop():null}
        </View>
    )
  }
}

const stylesCard = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingLeft: 3,
    position: 'absolute',
    top: 100,
    right: 140
  },
  kategoriContainer: {
    backgroundColor: '#FFFFFF',
    paddingLeft:15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  kategori: {
    borderWidth: 1,
    borderColor: 'rgb(40,40,40)',
    borderRadius: 3,
    paddingVertical: 9,
    paddingHorizontal: 15,
    marginRight: 15,
    backgroundColor:'#ffffff'
  },
  kategoriSelected: {
    borderWidth: 1,
    borderColor: '#ff7c01',
    borderRadius: 3,
    paddingVertical: 9,
    paddingHorizontal: 15,
    marginRight: 15,
    backgroundColor:'rgb(253,230,210)'
  },
  card: {
    width: 160,
    alignItems: 'flex-end',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    shadowColor: 'rgba(119, 117, 117, 0.8)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  text: {
    fontSize: 12,
    fontFamily: 'GothamRounded-book',
    color: 'rgb(40,40,40)'
  },
  selectedText: {
    fontSize: 12,
    fontFamily: 'GothamRounded-book',
    color: '#f5821f'
  }
});

const stylesModalFilter = StyleSheet.create({
  menuModal: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  menuModalContainer: {
    width: '80%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  menuModalContainerNext: {
    width: '80%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  safeArea: {
    width: '75%',
    height: '100%',
    backgroundColor: 'green',
  },
  menuModalItem: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
  }
});
