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
import { Product } from './src/components//product/index';
import { dummyProductWithDiscount, dummyProductWithoutDiscount } from './src/utils/dummydata';
import { PriceComponent } from './src/components/price';
class App extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Product price={dummyProductWithDiscount.price} discount={dummyProductWithDiscount.discount} title={dummyProductWithDiscount.title} imageurl={dummyProductWithDiscount.imageUrl} />
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