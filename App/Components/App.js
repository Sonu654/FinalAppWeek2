import React, { Component } from 'react';
import { Platform } from 'react-native';
import Router from '../myRouter';
import store from '../Store/Index';
import { Provider } from 'react-redux';



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

