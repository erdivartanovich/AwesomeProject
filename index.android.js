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

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Benvenuto !
        </Text>
        <Image style={styles.image}
          source={require('./me.jpg')}
        />

        <Text style={styles.data}>
          Nama: Erdiansyah Arsyad
        </Text>
        <Text style={styles.data}>
          Batch: #1 Camorra
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  data: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 200,
    borderRadius: 50,
    width: 200,
    marginBottom: 50
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
