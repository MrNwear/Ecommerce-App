import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CartItem } from './src/components/CartItem';
import { CartItemScreen } from './src/screens/CartItemScreen';
import { ProductDetails } from './src/screens/ProductDetails';
import { dummyCartItem, dummyOrder } from './src/utils/dummydata';
import { CheckOutScreen } from './src/screens/CheckOutScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { AccountScreen } from './src/screens/AccountScreen';
import { UpdateAccountScreen } from './src/screens/UpdateAccountScreen';
import { AddAddressScreen } from './src/screens/AddAddressScreen';
import { Order } from './src/components/Order';
import { OrdersScreen } from './src/screens/OrdersScreen';
class App extends React.Component {
  render() {
    return (
      <OrdersScreen />
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