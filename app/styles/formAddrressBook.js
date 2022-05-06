import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  form:{
    height:740,
    width:360,
    backgroundColor: '#FFFFFF',
    marginTop:10,
    padding:16,
    paddingTop:0
  },
  label:{
    fontSize:12,
    fontFamily:"GothamRounded-Book",
    marginTop:16
  },
  boxInput:{
    borderWidth:1,
    borderColor:"#d8d8d8",
    width:'100%',
    height:40,
    marginVertical:8,
    borderRadius:5
  },
  boxSelect:{
    borderWidth:1,
    borderColor:"#d8d8d8",
    width:'100%',
    height:40,
    marginVertical:8,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  boxMasuk: {
    alignItems: 'center',
    padding: 13,
    width: '100%',
    backgroundColor: 'rgb(22,184,178)',
    borderRadius: 5,
    marginVertical: 20
  }, 
  masukText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 5
  },
  textInput: {
    height: 30,
    paddingBottom: 4,
    paddingLeft: 8,
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: 'rgb(40,40,40)',
  },
  defaultSelectText:{
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: 'rgb(180,180,180)',
    paddingLeft: 8,
  },
  dropDown:{
    width:16,
    marginRight:8
  }

});