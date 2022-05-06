import { StyleSheet, Platform,Dimensions } from 'react-native'
export default StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#ffffff',
  },
  linearGradient: {
    height: 350,
    padding:16,
    position:'relative'
  },
  title:{
    margin:0,
    padding:0,
    fontFamily: "GothamRounded-Bold",
    fontSize: 50,
    letterSpacing: 0,
    color: '#ffffff',
    textShadowColor: "rgba(170, 152, 152, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowRadius: 4
  },
  footer:{
    padding:16,
    alignItems:'center'
  },
  btnGroup:{
    flexDirection:'row',
    padding:16,
    justifyContent:'space-between'
  },
  btnLewati:{
    width:160,
    height:40,
    backgroundColor:"#ffffff",
    borderRadius:5,
    borderColor:'#ff7c01',
    borderWidth:1,
    justifyContent:'center'
  },
  textLewati:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#4a4a4a"
  },
  btnLanjutkan:{
    width:160,
    height:40,
    backgroundColor:"#ff7c01",
    borderRadius:5,
    borderColor:'#ff7c01',
    borderWidth:1,
    justifyContent:'center'
  },
  textLanjutkan:{
    fontFamily: "GothamRounded-Bold",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  caraMudah:{
    fontFamily: "GothamRounded-Book",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#4a4a4a",
    marginTop:8
  },
  catGray:{
    height:253,
    width:235,
    position:'absolute',
    zIndex:1,
    bottom:-50,
    left:0
  },
  catWhite:{
    height:193,
    width:205,
    position:'absolute',
    zIndex:2,
    bottom:-20,
    left:80
  },
  ladies:{
    height:247,
    width:208,
    position:'absolute',
    zIndex:2,
    bottom:0,
    left:120
  }
})
