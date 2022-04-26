import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CartItem } from './src/components/CartItem';
import { CartItemScreen } from './src/screens/CartItemScreen';
import { ProductDetails } from './src/screens/ProductDetails';
import { dummyCartItem } from './src/utils/dummydata';
import { CheckOutScreen } from './src/screens/CheckOutScreen';
class App extends React.Component {
  render() {
    return (
      <CheckOutScreen />
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

});
export default App;