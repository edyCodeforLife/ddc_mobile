import { StyleSheet, Platform,Dimensions } from 'react-native'
const heightScreen = Dimensions.get('window').height
const widthScreen = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  titleHeader: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: 'rgb(40,40,40)'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS == 'ios' ? 35 : 15
  },
  boxContent: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boxContentText: {
    justifyContent: 'center',
    width: '95%',
    borderBottomWidth: 0.5,
    borderColor: 'rgb(220,220,220)',
    paddingVertical: 15
  },
  textTitle: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: 'rgb(40,40,40)',
    marginBottom: 5
  },
  text: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 12,
    color: 'rgb(140,140,140)'
  },
  ajakTitleText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 5
  },
  ajakText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: '#FFFFFF'
  },
  boxAjak: {
    padding: 15,
    width: '100%',
    backgroundColor: 'rgb(22,184,178)',
    borderRadius: 5,
    marginTop: 30,
    marginBottom:16
  },
  ratingFlex:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      alignItems:'center',
      paddingHorizontal:8
  },
  oval:{
      width: 40,
      height: 40,
      borderRadius:20,
      backgroundColor: '#FFF',
      shadowColor: 'rgba(119, 117, 117, 0.8)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      elevation: 5,
      shadowRadius: 30,
      shadowOpacity: 0.5,
      justifyContent:'center',
      alignItems:'center',
  },
  rating:{
    flexDirection:"row"
  },
  ratingGroup:{
    flexDirection:"row"
  },
  ratingText:{
    fontFamily: "GothamRounded-Book",
    fontSize: 10,
    color: "#282828",
    marginLeft:8
  },
  produkText:{
    fontFamily: "GothamRounded-Book",
    fontSize: 12,
    color: "#282828",
    paddingHorizontal:8,
    marginTop:8
  },
  topText:{
    fontFamily: "GothamRounded-Book",
    fontSize: 16,
    color: "#282828",
    marginRight:16
  },
  onTop:{
    position:'absolute',
    left:0,
    top:heightScreen-80,
    width:widthScreen,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  boxOntop:{
    width: 222,
    height: 40,
    borderRadius:20,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(119, 117, 117, 0.8)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowRadius: 30,
    shadowOpacity: 0.3,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  }
})
