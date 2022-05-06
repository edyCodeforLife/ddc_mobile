import { StyleSheet,Dimensions } from 'react-native'
import colors from '../Color'
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingBottom:16
  },
  jumboTron: {
    backgroundColor: '#000',
    height:331,
    width:Dimensions.get('window').width,
    padding:16
  },
  trending: {
    backgroundColor: '#fff',
    width:Dimensions.get('window').width,
    alignItems:'flex-start',
  },
  unggulan: {
    backgroundColor: '#f2f2f2',
    width:Dimensions.get('window').width,
    alignItems:'flex-start',
    paddingBottom:16
  },
  leftTitle:{
    fontFamily: "GothamRounded-Medium",
    fontSize: 16,
    color: "#282828"
  },
  rightTitle:{
    fontFamily: "GothamRounded-Medium",
    fontSize: 10,
    color: colors.pumpkinOrange
  },
  productName:{
    fontFamily: "GothamRounded-Bold",
    fontSize: 12,
    color: "#000"
  },
  productPrice:{
    fontFamily: "GothamRounded-Bold",
    fontSize: 14,
    color: "#000"
  },
  containerTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    padding:16,
    alignItems:'center',
    paddingBottom:0

  },
  rowCard:{
    flexDirection:'row',
    padding:16
  },
  partTrendingCard:{
    width:140,
    height:140,
    backgroundColor:'#aaaaaa',
    marginRight:16,
    borderRadius:3
  },
  partUnggulanCard:{
    width:165,
    height:255,
    backgroundColor:'#FFF',
    marginRight:16,
    borderRadius:3,
    padding:16,
    justifyContent:'space-between'
  },
  containerSearch:{
    flexDirection:'row',
    width:'100%',
    height:35,
    backgroundColor:'#ffffff',
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    borderRadius:5,
    overflow:'hidden'
  },
  partJumboTronCard:{
    width:220,
    height:220,
    backgroundColor:'#FFFFFF',
    marginRight:16,
    borderRadius:3
  },
  iconBarcode:{
    width: 20,
    height: 20
  },
  iconSearch:{
    width: 17,
    height: 17
  },
  containerIMG:{
    height:'100%',
    width:47,
    backgroundColor:colors.whiteTwo,
    justifyContent:'center',
    alignItems:'center'
  },
  textSearch:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    color: "#9b9b9b"
  },
  containerTextSearch:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    padding:16
  },
  ratingGroup:{
    flexDirection:"row",
    marginBottom:8
  },
})
