import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import navbarStyles from '../styles/navbar'
import boxContentStyles from '../styles/boxContent'
import styles from '../styles/login'

import { BackIcon, EyeIcon, EyeActiveIcon } from '../lib/images'
import { doLogin } from '../actions';

import  DialogProgress  from 'react-native-dialog-progress';


const options = {
    title:"",
    message:"Loading...",
    isCancelable:false
}
//angelio@dusdusan.com
//123123

class MasukScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      login_status:''
    }
    this.logon = this.logon.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("nextProps"+nextProps.login_type);
    if (nextProps.login_type !== prevState.login_type) {
        if(nextProps.login_type=='DO_LOGIN'){
          DialogProgress.show(options)
        }else if (nextProps.login_type=='LOGIN_ERROR'){
          DialogProgress.hide()
          Alert.alert("","Incorrect username or password.");
        }else if (nextProps.login_type=='LOGIN_SUCCESS') {
          DialogProgress.hide()      
          // Alert.alert("","Login Success");
          Actions.root1();
        }
        return ({ login_status: nextProps.login_type })
    }else{
      return ({ login_status: '' })
    }
  }




  logon() {
      if (this.state.email && this.state.password) {
          this.props.dispatch(doLogin(this.state.email, this.state.password))
      }else{
        Alert.alert("","Incorrect username or password.");
      }
  }

  renderHeader() {
    return (
      <View style={navbarStyles.containerNavbar}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingVertical:15, paddingRight:20}} onPress={() => Actions.root1()}>
            <BackIcon/>
          </TouchableOpacity>
          <Text style={navbarStyles.textNavbar}>Masuk</Text>
          </View>
          <TouchableOpacity onPress={() => Actions.daftar()}>
          <Text style={styles.textRight}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    let { email, password, showPassword } = this.state
    let filled = 'rgb(22,184,178)'
    let empty = 'rgb(220,220,220)'
    let secureText = true
    if (showPassword) {
      secureText = false
    }

    return (
      <ScrollView style={{backgroundColor:'#FFFFFF'}}>
        <View style={styles.container}>
          {this.renderHeader()}

          <View style={{paddingHorizontal: 15}}>
            <View style={[styles.boxContent, {borderColor: email ? filled : empty}]}>
              <Text style={styles.textPlacehoder}>Email</Text>
              <TextInput
                style={styles.textInput}
                keyboardType='email-address'
                onChangeText={(email) => this.setState({email})} />
            </View>
            <View style={[styles.boxContent, {borderColor: password ? filled : empty}]}>
              <Text style={styles.textPlacehoder}>Password</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={[styles.textInput, {width:'90%'}]}
                  secureTextEntry={secureText}
                  onChangeText={(password) => this.setState({password})} />
                <TouchableOpacity style={{top: Platform.OS == 'ios' ? 0 : 2}} onPress={() => this.setState({ showPassword: !showPassword })}>
                  {showPassword ? <EyeActiveIcon/> : <EyeIcon/>}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={()=>Actions.root1()}>
              <Text style={styles.lupaPassword}>Lupa Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMasuk} onPress={this.logon}>
              <Text style={styles.masukText}>Masuk</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'center'}}>Atau masuk menggunakan</Text>
            <TouchableOpacity style={styles.boxMasukFB} onPress={()=>Actions.root1()}>
              <Text style={styles.masukFBText}>Masuk Dengan Facebook</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    )
  }
}


const mapStateToProps = state => {
  console.log("test"+state.loginReducer.type);
  return {
      login_type: state.loginReducer.type,
      login_msg: state.loginReducer.error,
  }
}
export default connect(
  mapStateToProps
)(MasukScreen)
