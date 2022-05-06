import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    boxSuggestion:{
        paddingTop:20,
        paddingLeft:16,
    },
    populerText:{
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        color: "#dcdcdc",
        marginBottom:16
    },
    boxSuggestProduct:{
        width: 60,
        height: 60,
        backgroundColor: "#f0f0f0",
        marginRight:16
    },
    kategoriContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgSpeaker:{
        height:22,
        width:12
    },
    iconClose:{
        fontSize:22,
        fontFamily: "GothamRounded-Medium",
        color:'#f5821f'
    },
    
    historyFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:16

    },
    hapusText:{
        paddingRight:16,
        color:'#f5821f',
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
    },
    produkText:{
        color:'#282828',
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
    },
    imgReturn:{
        height:18,
        width:16,
        marginRight:16
    }
})
