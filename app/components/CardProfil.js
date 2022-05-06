import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import styles from '../styles/cardProfil'
import { connect } from 'react-redux'


class CardProfil extends Component {
  render() {
    return (
        <View style={styles.cardContainer}>
          <View style={styles.card}>

              <View style={{flexDirection: 'row'}}>

                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                      style={{width: 50, height: 50, borderRadius: 25}}
                      source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}}
                  />
                  <Text style={styles.name}>{this.props.profile_data?this.props.profile_data.firstName:null}</Text>
                  <Text style={styles.status}>Reseller</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginLeft: 30}}>
                      <Text style={styles.titleText}>Level</Text>
                      <Text style={styles.text}>Prioritas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 50}}>
                      <Text style={styles.titleText}>Poin</Text>
                      <Text style={styles.text}>10780</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <TouchableOpacity style={{marginLeft: 30}}>
                      <Text style={styles.titleText}>Saldo</Text>
                      <Text style={styles.text}>Rp. 200,000,000</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

          </View>
        </View>
    );
  }
}


const mapStateToProps = state => {
  // console.log("profile"+ JSON.stringify(state.loginReducer.data));
  return {
      login_type: state.loginReducer.type,
      profile_data : state.loginReducer.data
  }
}
export default connect(
  mapStateToProps
)(CardProfil)
