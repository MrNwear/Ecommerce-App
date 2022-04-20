/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from './src/components//product/index';
import { HomeScreen } from './src/screens/HomeScreen';
import { dummyProductWithDiscount, dummyProductWithoutDiscount } from './src/utils/dummydata';
class App extends React.Component {
  render() {
    return (
      <HomeScreen />


    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
export default App;