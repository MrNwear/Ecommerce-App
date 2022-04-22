import React from 'react';
import { StyleSheet } from 'react-native';
import { ProductDetails } from './src/screens/ProductDetails';
class App extends React.Component {
  render() {
    return (
      <ProductDetails productId={123456} />


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