import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Index from './App'
class SecureChat extends Component {
  render() {
    return (
        <Index/>
    );
  }
}


AppRegistry.registerComponent('SecureChat', () => SecureChat);
