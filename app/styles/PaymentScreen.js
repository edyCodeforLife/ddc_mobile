import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent:'center',

  },
  form:{
    width:360,
    backgroundColor: '#FFFFFF',
    padding:16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:8
  },
  radioContainer:{
    width:360,
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    flexDirection:"row",
    padding:16,
  },
  bukuAlamat:{
    fontFamily: "GothamRounded-Medium",
    fontSize: 14,
    color: "#282828"
  },
  radio:{
    padding:0,
    margin:0,
    backgroundColor:'#FFFFFF'
  },
  radioBullet:{
    borderRadius:50,
    borderColor:"#b4b4b4",
    borderWidth:2,
    height:20,
    width:20,
    justifyContent:'center',
    alignItems:'center'
  },
  radioBulletFill:{
    borderRadius:50,
    backgroundColor:"#28b0a7",
    height:10,
    width:10,
  },
  radioText:{
    marginLeft:16,
    fontFamily: "GothamRounded-Medium",
    fontSize: 14,
    color: "#282828"
  },
  tncContainer:{
    padding:16,
    marginTop:16,
    marginBottom:8
  },
  tncText:{
    fontFamily: "GothamRounded-Book",
    fontSize: 12,
    color: "#282828",
    textAlign:'center',
    lineHeight: 18, 
  },
  boxMasuk: {
    alignItems: 'center',
    padding: 13,
    backgroundColor: 'rgb(22,184,178)',
    borderRadius: 5,
    width:330,
    marginBottom:16
  }, 
  masukText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 5
  },
  boxForm:{
    width:360,
    alignItems:'center'
  },
  bankIcons:{
    flexDirection:'row',
    alignItems:'flex-end'
  },
  bankMethod:{
    padding:16,
    paddingLeft:32,
    backgroundColor:'#F0F0F0'
  },
  bankMandiri:{
    marginHorizontal:16
  },
  label:{
    fontSize:12,
    fontFamily:"GothamRounded-Book",
    color:'#282828',
    marginTop:16
  },
  labelBold:{
    fontSize:12,
    fontFamily:"GothamRounded-Bold",
    color:'#282828',
    marginTop:16
  },
  boxSelect:{
    borderWidth:1,
    borderColor:"#FFFFFF",
    backgroundColor:"#FFFFFF",
    width:'48%',
    height:40,
    marginVertical:8,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  dropDown:{
    width:16,
    marginRight:8
  },
  defaultSelectText:{
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#282828',
    paddingLeft: 8,
  },
  syaratBox:{
    flexDirection:'row',
    paddingTop:8
  },
  liBullet:{
    backgroundColor:'#282828',
    height:7,
    width:7,
    borderWidth:1,
    borderRadius:4,
    marginRight:16,
    marginTop:6
  },
  syaratText:{
    fontFamily: 'GothamRounded-Book',
    fontSize: 12,
    color: '#282828',
  },
  colDDC:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  half:{
    width:'48%'
  },
  boxInput:{
    borderWidth:1,
    borderColor:"#FFFFFF",
    backgroundColor:'#FFFFFF',
    width:'100%',
    height:40,
    marginVertical:8,
    borderRadius:5
  },
  textInput: {
    paddingLeft: 8,
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: 'rgb(40,40,40)',
  },
});