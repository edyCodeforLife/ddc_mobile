import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Application from './app/containers/app'

import { Provider,connect } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import itemApp from './app/reducers'
import mySaga from './app/sagas'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(itemApp,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
