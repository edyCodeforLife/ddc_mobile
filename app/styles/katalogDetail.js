import { StyleSheet, Platform,Dimensions } from 'react-native'
const heightScreen = Dimensions.get('window').height
const widthScreen = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  flexRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:16
  },
  productTitle:{
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: '#282828',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  borderTitle:{
    width:'87%'
  },
  textLoved:{
    marginTop:4,
    fontFamily:'GothamRounded-Book',
    fontSize:12,
    color:'#e61e3c'
  },
  lovedBorder:{
    padding:8
  },
  rating:{
    flexDirection:"row",
    alignItems:'center'
  },
  ratingGroup:{
    flexDirection:"row"
  },
  ratingText:{
    fontFamily: "GothamRounded-Book",
    fontSize: 16,
    color: "#dcdcdc",
    marginLeft:8
  },
  rows:{
    marginHorizontal:16,
    marginTop:8
  },
  labelText:{
    fontFamily: "GothamRounded-Book",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.38,
    color: "#8c8c8c"
  },
  labelValue:{
    fontFamily: "GothamRounded-Book",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0.5,
    color: "#282828"
  },
  card:{
    marginBottom:16,
    backgroundColor:"#FFFFFF",
    width:widthScreen
  },
  textOngkir:{
    fontFamily: "GothamRounded-Book",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#282828",
    marginLeft:16
  },
  labelDesc:{
    fontFamily: "GothamRounded-Book",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#282828",
    marginBottom:8
  },
  labelDescDisable:{
    fontFamily: "GothamRounded-Book",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#dcdcdc",
    marginBottom:8
  },
  labelDescChild:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    letterSpacing: 0.5,
    color: "#282828",
    marginBottom:8,
    lineHeight: 28,
  },
  cardTran:{
    padding:16,
    backgroundColor:"#FFFFFF",
  },
  labelMore:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0.44,
    color: "#16b8b2"
  },
  tableTop:{
    borderWidth:1,
    borderColor:'rgb(245,130,31)',
    backgroundColor:'rgb(253,234,217)',
    borderTopStartRadius:5,
    borderTopEndRadius:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tableBottom:{
    borderWidth:1,
    borderTopWidth:0,
    borderColor:'rgb(245,130,31)',
    borderBottomStartRadius:5,
    borderBottomEndRadius:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tableBody:{
    borderWidth:1,
    borderTopWidth:0,
    borderBottomWidth:0,
    borderColor:'rgb(245,130,31)',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  col:{
    width:'50%',
    paddingHorizontal:8,
  },
  colHeader:{
    width:'50%',
    padding:6,
  },
  disable:{
    color:'#dcdcdc'
  },
  zeroUlasan:{
    padding:16,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:16
  },
  btnOrder:{
    width: '48%',
    height: 40,
    borderRadius:5,
    backgroundColor: "#16b8b2",
    justifyContent:'center',
    alignItems:'center',
  },
  btnTambah:{
    width: '48%',
    height: 40,
    backgroundColor: "#FFF",
    borderRadius:5,
    borderColor:'#16b8b2',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
  },
  ulasan:{
    flexDirection:'row',
    marginTop:16
  },
  ulasanUser:{
    height:48,
    width:48,
    backgroundColor:'#DCDCDC',
    borderRadius:24
  },
  userName:{
    color:'#8C8C8C',
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.44,
  },
  userComment:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#282828"
  },
  ulasanDescWrap:{
    marginHorizontal:16
  }

})
