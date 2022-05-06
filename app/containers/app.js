import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  Platform
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome'
import { Router, Scene, Stack, Tabs, ActionConst } from 'react-native-router-flux'
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import {
  ProfilActiveIcon,
  ProfilInactiveIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
  KatalogActiveIcon,
  KatalogInactiveIcon,
  KomunitasActiveIcon,
  KomunitasInactiveIcon,
  PembayaranActiveIcon,
  PembayaranInactiveIcon
} from '../lib/images'

import PaymentScreen from '../components/MainScreen/PaymentScreen'
import FormAddressBook from '../components/MainScreen/FormAddressBook'
import ListAddressBook from '../components/MainScreen/ListAddressBook'
import BerandaScreen from '../components/MainScreen/BerandaScreen'
import KatalogScreen from '../components/MainScreen/KatalogScreen'
import KomunitasScreen from '../components/MainScreen/KomunitasScreen'
import PembayaranScreen from '../components/MainScreen/PembayaranScreen'
import KatalogPencarian from '../components/MainScreen/KatalogPencarian'
import KatalogDetail from '../components/MainScreen/KatalogDetail'
import ProfilScreen from '../components/MainScreen/ProfilScreen'
import PengaturanScreen from '../components/PengaturanScreen'
import MasukScreen from '../components/MasukScreen'
import DaftarScreen from '../components/DaftarScreen'
import SplashScreen from '../components/SplashScreen'
import Swipper from '../components/Swipper'


import { connect } from "react-redux";


console.ignoredYellowBox = [
  'Remote debugger is in a background tab',
  'Warning: BackAndroid is deprecated.',
  'Warning: In next release empty section headers will be rendered.',
  'Possible Unhandled Promise Rejection',
]




class Routs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
    }


    iconProfile(props) {
        let focused = props.focused
        let top = 0
        if (!focused) {
          if (Platform.OS == 'ios') {
            top = 0
          } else {
            top = 8
          }
        } else {
          if (Platform.OS == 'ios') {
            top = -2
          } else {
            top = 2
          }
        }

        let icon
        if (focused) {
          switch(props.iconName) {
              case 'beranda':
                  icon = <HomeActiveIcon/>
                  break;
              case 'katalog':
                  icon = <KatalogActiveIcon/>
                  break;
              case 'komunitas':
                  icon = <KomunitasActiveIcon/>
                  break;
              case 'pembayaran':
                  icon = <PembayaranActiveIcon/>
                  break;
              case 'profil':
                  icon = <ProfilActiveIcon/>
                  break;
              default:
                  icon = null
          }
        } else {
            switch(props.iconName) {
                case 'beranda':
                    icon = <HomeInactiveIcon/>
                    break;
                case 'katalog':
                    icon = <KatalogInactiveIcon/>
                    break;
                case 'komunitas':
                    icon = <KomunitasInactiveIcon/>
                    break;
                case 'pembayaran':
                    icon = <PembayaranInactiveIcon/>
                    break;
                case 'profil':
                    icon = <ProfilInactiveIcon/>
                    break;
                default:
                    icon = null
            }
        }

        return (
          <View style={{ width: focused?35:24, height: focused?30:24, top: top }}>
            {icon}
          </View>
        )
    }

    render() {
        return (
            <Router>
                <Scene key='root' transitionConfig={() => ({screenInterpolator: StackViewStyleInterpolator.forHorizontal})}>
                    <Scene key='splashscreen'
                        component={SplashScreen}
                        title={null}
                        panHandlers={null}
                        hideNavBar={true} />
                    <Scene key='swipper'
                        component={Swipper}
                        title={null}
                        panHandlers={null}
                        type={ActionConst.RESET}
                        hideNavBar={true} />
                    <Tabs key='root1'
                        tabBarPosition={"bottom"}
                        type="reset"
                        lazy={true}
                        swipeEnabled ={false}
                        animationEnabled={false}
                        activeTintColor={"rgb(40,40,40)"}
                        inactiveTintColor={"transparent"}
                        tabBarStyle={{height:55, backgroundColor:'#FFFFFF', top: Platform.OS == 'ios' ? 1 : 0}}
                        labelStyle={{
                          alignSelf: 'center',
                          fontFamily: 'GothamRounded-Book',
                          fontSize: 10
                        }} >
                        <Scene key='berandaScene' title='Beranda' icon={this.iconProfile} iconName='beranda'>
                            <Scene key='beranda'
                                component={BerandaScreen}
                                title='Beranda'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='katalogScene' title='Katalog' icon={this.iconProfile} iconName='katalog'>
                            <Scene key='katalog'
                                component={KatalogScreen}
                                title='Katalog'
                                panHandlers={null}
                                hideNavBar={true} />
                            <Scene key="katalogdetail"
                                component={KatalogDetail}
                                title={null}
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        
                        <Scene key='komunitasScene' title='Komunitas' icon={this.iconProfile} iconName='komunitas'>
                            <Scene key='komunitas'
                                component={KomunitasScreen}
                                title='Komunitas'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='pembayaranScene' title='Pembayaran' icon={this.iconProfile} iconName='pembayaran'>
                            <Scene key='masuk'
                                    component={MasukScreen}
                                    title='Masuk'
                                    panHandlers={null}
                                    hideNavBar={true} />
                            <Scene key='pembayaran'
                                component={PaymentScreen}
                                title='Pembayaran'
                                initial={this.props.login_type=="LOGIN_SUCCESS"?true:false}
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='profilScene' title='Profil' icon={this.iconProfile} iconName='profil'>
                        <Scene key='masuk'
                                component={MasukScreen}
                                title='Masuk'
                                panHandlers={null}
                                hideNavBar={true} />
                            <Scene key='profil'
                                component={ProfilScreen}
                                title='Profil'
                                initial={this.props.login_type=="LOGIN_SUCCESS"?true:false}
                                panHandlers={null}
                                direction='horizontal'
                                hideNavBar={true} />
                            
                        </Scene>
                    </Tabs>
                    <Scene key='pengaturan'
                        component={PengaturanScreen}
                        title='Pengaturan'
                        panHandlers={null}
                        hideNavBar={true} />
                    <Scene key='daftar'
                        component={DaftarScreen}
                        title='Daftar'
                        panHandlers={null}
                        hideNavBar={true} />
                    <Scene key="listAddressBook"
                        component={ListAddressBook}
                        title={null}
                        panHandlers={null}
                        hideNavBar={true} />
                    <Scene key="formAddressBook"
                        component={FormAddressBook}
                        title={null}
                        panHandlers={null}
                        hideNavBar={true} />
                    <Scene key="katalogpencarian"
                        component={KatalogPencarian}
                        title={null}
                        panHandlers={null}
                        hideNavBar={true} />
                    <Scene key="katalogdetail"
                        component={KatalogDetail}
                        title={null}
                        panHandlers={null}
                        hideNavBar={true} />
                </Scene>
            </Router>
        )
    }
}


const mapStateToProps = state => {
    return {
      login_type: state.loginReducer.type,
    }
}

export default connect(
    mapStateToProps
)(Routs)

 
