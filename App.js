/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainScreen } from './src/components/playaround/MainScreen';
import { PhoneScreen } from './src/screens/phoneScreen/index.js';
import { ConfirmaionCodeScreen } from './src/screens/confirmationCode';
import { AddToCartButton } from './src/components/AddToCartButton/AddToCartButton';
import { Category } from './src/components//category/index';
import { dummyData } from './src/utils/dummydata';
import { PriceComponent } from './src/components/price';
class App extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <PriceComponent price={100} />
      </View>


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