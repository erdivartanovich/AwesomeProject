/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Greeting extends Component {
  render () {
    return (
      <Text> Hello {this.props.name}!</Text>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Erdiansyah' />
        <Greeting name='Jaina' />
        <Greeting name='Joko' />
        <Greeting name='Bangbang' />

      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
