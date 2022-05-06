import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  form:{
    height:55,
    width:360,
    backgroundColor: '#F4F4F4',
    padding:16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  boxList:{
    padding:16,
    width:360,
    backgroundColor: '#FFFFFF',
    justifyContent:'center',
    marginBottom:16,
    position:'relative'
  },
  bukuAlamat:{
    fontFamily: "GothamRounded-Medium",
    fontSize: 14,
    color: "#282828"
  },
  boxTambah:{
    width: 130,
    height: 30,
    backgroundColor: "#16b8b2",
    borderRadius: 3,
    alignItems: 'center',
    justifyContent:'center'
  },
  tambahText:{
    fontFamily: "GothamRounded-Medium",
    fontSize: 12,
    textAlign: "center",
    color: "#FFFFFF"
  },
  type:{
    fontFamily: "GothamRounded-Bold",
    fontSize: 14,
    color: "#282828"
  },
  nama:{
    fontFamily: "GothamRounded-Bold",
    fontSize: 14,
    color: "#282828"
  },
  phone:{
    marginTop:16,
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    color: 'rgb(40,40,40)',
  },
  street:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    color: 'rgb(40,40,40)',
  },
  city:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    color: 'rgb(40,40,40)',
  },
  kodePos:{
    fontFamily: "GothamRounded-Book",
    fontSize: 14,
    color: 'rgb(40,40,40)',
  },
  textEdit:{
    fontFamily: "GothamRounded-Medium",
    fontSize: 13,
    color: 'rgb(22,184,178)',
  },
  imgEdit:{
    width:18,
    marginRight:4
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  defaultBox:{
    position:'absolute',
    top:16,
    right:16,
    backgroundColor:'#fff8f8',
    borderWidth:1,
    borderColor:'#ff7c01',
    padding:3,
    borderRadius:3,
    width:110,
    alignItems:'center'
  },
  textDefault:{
    color:'#ff7c01',
    fontFamily: "GothamRounded-Medium",
    fontSize: 10,
  }
});